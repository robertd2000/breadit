import { CommentVote, User } from "@prisma/client";

export type ExtendedComment = Comment & {
  votes: CommentVote[];
  author: User;
  replies: ReplyComment[];
};

export type ReplyComment = Comment & {
  votes: CommentVote[];
  author: User;
};

export interface CommentsSectionProps {
  postId: string;
  comments: ExtendedComment[];
}
