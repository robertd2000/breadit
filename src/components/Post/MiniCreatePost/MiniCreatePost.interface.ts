import { Session } from "next-auth";

export interface MiniCreatePostProps {
  session: Session | null;
}
