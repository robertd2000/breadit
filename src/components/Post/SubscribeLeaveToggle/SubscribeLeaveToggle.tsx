import { FC } from "react";
import { SubscribeLeaveToggleProps } from "./SubscribeLeaveToggle.inteface";
import { Button } from "@/components/ui/Button";

const SubscribeLeaveToggle: FC<SubscribeLeaveToggleProps> = ({
  isSubscribed,
  subredditId,
  subredditName,
}) => {
  return isSubscribed ? (
    <Button
      className="w-full mt-1 mb-4"
      // isLoading={isUnsubLoading}
      // onClick={() => unsubscribe()}
    >
      Leave community
    </Button>
  ) : (
    <Button
      className="w-full mt-1 mb-4"
      // isLoading={isSubLoading}
      // onClick={() => subscribe()}
    >
      Join to post
    </Button>
  );
};

export default SubscribeLeaveToggle;
