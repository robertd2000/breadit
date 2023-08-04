import { CommentVote } from "@prisma/client";

export interface CommentVotesProps {
  commentId: string;
  votesAmt: number;
  currentVote?: PartialVote;
}

export type PartialVote = Pick<CommentVote, "type">;
