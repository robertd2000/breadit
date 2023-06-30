"use client";

import { FC } from "react";
import { Button } from "../../ui/Button";
import { useAuthForm } from "@/hooks/auth/useAuthForm";
import { Icons } from "../../Icons/Icons";
import { cn } from "@/lib/utils";
import { UserAuthFormProps } from "./UserAuthForm.interface";

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { loginWithGoogle, isLoading } = useAuthForm();

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
