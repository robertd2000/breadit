import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import type EditorJS from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "../use-toast";
import { PostCreationRequest, PostValidator } from "@/lib/validators/post";

export const useEditorForm = (
  subredditId: string,
  ref: React.MutableRefObject<EditorJS | undefined>
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostCreationRequest>({
    resolver: zodResolver(PostValidator),
    defaultValues: {
      subredditId,
      title: "",
      content: null,
    },
  });

  const router = useRouter();
  const pathname = usePathname();

  const { mutate: createPost } = useMutation({
    mutationFn: async ({
      title,
      content,
      subredditId,
    }: PostCreationRequest) => {
      const payload: PostCreationRequest = { title, content, subredditId };
      const { data } = await axios.post("/api/subreddit/post/create", payload);

      return data;
    },
    onError() {
      return toast({
        title: "Something went wrong.",
        description: "Your post was not published. Please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      const newPathname = pathname.split("/").slice(0, -1).join("/");
      router.push(newPathname);

      router.refresh();

      return toast({
        description: "Your post has been published.",
      });
    },
  });

  const onSubmit = async (data: PostCreationRequest) => {
    const blocks = await ref.current?.save();

    const payload: PostCreationRequest = {
      subredditId,
      title: data.title,
      content: blocks,
    };

    createPost(payload);
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      for (const [_key, value] of Object.entries(errors)) {
        toast({
          title: "Something went wrong.",
          description: (value as { message: string }).message,
          variant: "destructive",
        });
      }
    }
  }, [errors]);

  const { ref: titleRef, ...rest } = register("title");

  return {
    titleRef,
    handleSubmit,
    rest,
    onSubmit,
  };
};
