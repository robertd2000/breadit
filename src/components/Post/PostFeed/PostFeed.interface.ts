import { ExtendedPost } from "@/types/db";

export interface PostFeedProps {
  initialPosts: ExtendedPost[];
  subredditName?: string;
}
