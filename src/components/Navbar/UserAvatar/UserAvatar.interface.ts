import { AvatarProps } from "@radix-ui/react-avatar";
import { User } from "next-auth";

export interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image" | "email">;
}
