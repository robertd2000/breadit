import { Post, Vote } from "@prisma/client";

export interface PostVoteServerProps {
  postId: string;
  initialVotesAmount?: number;
  initialVote?: Vote["type"] | null;
  getData?: () => Promise<(Post & { votes: Vote[] }) | null>;
}
