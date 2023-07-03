import axios from "axios";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";

export const createSubreddit = async (
  subredditData: CreateSubredditPayload
) => {
  const { data } = await axios.post("/api/subreddit", subredditData);
  return data as string;
};
