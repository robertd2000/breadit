import { User } from "@prisma/client";

export interface UserNameFormProps
  extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, "id" | "username">;
}
