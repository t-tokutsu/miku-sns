import { Center, Spinner } from "@chakra-ui/react";
import { FC, useState } from "react";
import { usePlayerListener } from "../features/player/hooks/usePlayerListener";

export const Loading: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  usePlayerListener({
    onVideoReady: () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2 * 1000);
    },
  });
  return isLoading ? (
    <Center bg={"gradation.green"} inset={0} pos={"fixed"} zIndex={"overlay"}>
      <Spinner color={"white"} size="xl" />
    </Center>
  ) : null;
};
