"use client";

import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "../../ui/Button";
import { Icons } from "../../Icons/Icons";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { UserAuthFormProps } from "./UserAuthForm.interface";

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      //toast
      toast({
        title: "There was a problem",
        description: "There was an error with Google authorization",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        size={"sm"}
        className="w-full"
        isLoading={isLoading}
        onClick={loginWithGoogle}
      >
        {isLoading ? null : <Icons.google className="h-4 w-4" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
