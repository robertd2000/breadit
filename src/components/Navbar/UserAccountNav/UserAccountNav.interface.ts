import { User } from "next-auth";

export interface UserAccountNavProps {
  user: Pick<User, "name" | "image" | "email">;
}
