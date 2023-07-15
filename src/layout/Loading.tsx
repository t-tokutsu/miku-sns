import { Center, Spinner } from "@chakra-ui/react";
import { FC, useState } from "react";
import { usePlayerListener } from "../features/player/hooks/usePlayerListener";

export const Loading: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  usePlayerListener({
    onVideoReady: () => {
      setIsLoading(false);
    },
  });
  return isLoading ? (
    <Center bg={"black"} inset={0} pos={"fixed"} zIndex={"overlay"}>
      <Spinner color={"white"} size="xl" />
    </Center>
  ) : null;
};
