import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { createSubreddit } from "@/api/subreddit/subreddit.api";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { toast } from "@/hooks/use-toast";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";

export const useCreateSubreddit = () => {
  const [input, setInput] = useState<string>("");

  const router = useRouter();

  const { loginToast } = useCustomToast();

  const { mutate, isLoading } = useMutation({
    mutationFn: createSubreddit,
    onError(error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          return toast({
            title: "Subreddit already exists.",
            description: "Please choose a different name.",
            variant: "destructive",
          });
        }

        if (error.response?.status === 422) {
          return toast({
            title: "Invalid subreddit name.",
            description: "Please choose a name between 3 and 21 letters.",
            variant: "destructive",
          });
        }

        if (error.response?.status === 401) {
          return loginToast();
        }
      }

      toast({
        title: "There was an error.",
        description: "Could not create subreddit.",
        variant: "destructive",
      });
    },
    onSuccess(data) {
      router.push(`/r/${data}`);
    },
  });

  const createCommunity = () => {
    const payload: CreateSubredditPayload = {
      name: input,
    };
    mutate(payload);
  };

  return {
    input,
    setInput,
    createCommunity,
    isLoading,
    router,
  };
};
