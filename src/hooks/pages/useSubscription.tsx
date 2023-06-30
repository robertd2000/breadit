import React from "react";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

export const useSubscription = async (slug: string) => {
  const session = await getAuthSession();

  const subreddit = await db.subreddit.findFirst({
    where: {
      name: slug,
    },
    include: {
      posts: {
        include: {
          author: true,
          votes: true,
        },
      },
    },
  });

  const subscription = !session?.user
    ? undefined
    : await db.subscription.findFirst({
        where: {
          subreddit: {
            name: slug,
          },
          user: {
            id: session.user.id,
          },
        },
      });

  const isSubscribed = !!subscription;

  const memberCount = await db.subscription.count({
    where: {
      subreddit: {
        name: slug,
      },
    },
  });

  const userId = session?.user.id;

  return {
    subreddit,
    userId,
    isSubscribed,
    memberCount,
    subscription,
  };
};
