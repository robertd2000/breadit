import React from "react";
import { db } from "@/lib/db";

export const useSubmit = async (slug: string) => {
  const subreddit = await db.subreddit.findFirst({
    where: {
      name: slug,
    },
  });

  return { subreddit };
};
