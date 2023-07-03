"use client";

import React, { FC } from "react";
import { Loader2 } from "lucide-react";
import Post from "../PostCard/Post";
import { usePostFeed } from "@/hooks/post/feed/usePostFeed";
import { PostFeedProps } from "./PostFeed.interface";

const PostFeed: FC<PostFeedProps> = ({ initialPosts, subredditName }) => {
  const { session, posts, isFetchingNextPage, ref } = usePostFeed(
    initialPosts,
    subredditName
  );

  return (
    <ul className="flex flex-col col-span-2 space-y-6">
      {posts.map((post, index) => {
        const votesAmt = post.votes.reduce((acc, vote) => {
          if (vote.type === "UP") return acc + 1;
          if (vote.type === "DOWN") return acc - 1;

          return acc;
        }, 0);

        const currentVote = post.votes.find(
          (vote) => vote.userId === session?.user.id
        );

        if (index === posts.length - 1)
          return (
            <li key={post.id} ref={ref}>
              <Post
                post={post}
                commentAmt={post.comments.length}
                subredditName={post.subreddit.name}
                votesAmt={votesAmt}
                currentVote={currentVote}
              />
            </li>
          );

        return (
          <Post
            key={post.id}
            post={post}
            commentAmt={post.comments.length}
            subredditName={post.subreddit.name}
            votesAmt={votesAmt}
            currentVote={currentVote}
          />
        );
      })}

      {isFetchingNextPage && (
        <li className="flex justify-center">
          <Loader2 className="w-6 h-6 text-zinc-500 animate-spin" />
        </li>
      )}
    </ul>
  );
};

export default PostFeed;
