import { Post, User, Vote } from "@prisma/client";

type PartialVote = Pick<Vote, "type">;

export interface PostProps {
  post: Post & {
    author: User;
    votes: Vote[];
  };
  votesAmt: number;
  subredditName: string;
  currentVote?: PartialVote;
  commentAmt: number;
}
