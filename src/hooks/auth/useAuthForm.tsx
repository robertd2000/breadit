import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useToast } from "../use-toast";

export const useAuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "There was a problem",
        description: "There was an error with Google authorization",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loginWithGoogle,
    isLoading,
  };
};
