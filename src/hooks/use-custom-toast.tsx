import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { toast } from "./use-toast";

export const useCustomToast = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Login required",
      description: "You need to be logged in",
      variant: "destructive",
      action: (
        <Link
          href={"/sign-in"}
          onClick={() => dismiss()}
          className={buttonVariants({ variant: "outline" })}
        >
          Login
        </Link>
      ),
    });
  };

  return {
    loginToast,
  };
};
