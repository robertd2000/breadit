import { Comment, CommentVote, User } from "@prisma/client";

export interface PostCommentProps {
  comment: ExtendedComment;
  votesAmt: number;
  currentVote: CommentVote | undefined;
  postId: string;
}

export type ExtendedComment = Comment & {
  votes: CommentVote[];
  author: User;
};
