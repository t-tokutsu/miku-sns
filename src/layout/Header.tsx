import { Avatar, Box, HStack, Spacer } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";

export const Header: FC = () => {
  const { scrollDirection } = useScrollDirection();
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (scrollDirection === "DOWN") {
      setIsShow(false);
    } else if (scrollDirection === "UP") {
      setIsShow(true);
    }
  }, [scrollDirection]);

  return (
    <HStack
      bg={"white"}
      left={0}
      p={2}
      pos={"sticky"}
      right={0}
      top={0}
      transform={isShow ? undefined : "translateY(-100%)"}
      transitionDuration={"0.3s"}
      transitionProperty={"transform"}
      zIndex={"sticky"}
    >
      <Box>ロゴ</Box>
      <Spacer />
      <Avatar size={"sm"} />
    </HStack>
  );
};
