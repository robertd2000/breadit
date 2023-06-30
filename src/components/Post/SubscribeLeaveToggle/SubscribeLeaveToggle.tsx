"use client";

import { FC } from "react";
import { Button } from "@/components/ui/Button";
import { useSubscribeLeaveToggle } from "../../../hooks/post/useSubscribeLeaveToggle";
import { SubscribeLeaveToggleProps } from "./SubscribeLeaveToggle.inteface";

const SubscribeLeaveToggle: FC<SubscribeLeaveToggleProps> = ({
  isSubscribed,
  subredditId,
  subredditName,
}) => {
  const { subscribe, unsubscribe, isSubLoading, isUnsubLoading } =
    useSubscribeLeaveToggle(subredditId, subredditName);

  return isSubscribed ? (
    <Button
      className="w-full mt-1 mb-4"
      isLoading={isUnsubLoading}
      onClick={() => unsubscribe()}
    >
      Leave community
    </Button>
  ) : (
    <Button
      className="w-full mt-1 mb-4"
      isLoading={isSubLoading}
      onClick={() => subscribe()}
    >
      Join to post
    </Button>
  );
};

export default SubscribeLeaveToggle;
