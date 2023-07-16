import { Avatar, HStack, Spacer, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import { useJotaiAccountId } from "../features/account/useJotaiAccountId";
import { myAccountId } from "../features/posts/data/accounts";

export const Header: FC = () => {
  const { scrollDirection } = useScrollDirection();
  const { setAccountId } = useJotaiAccountId();
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
      <Text fontFamily={"barcode"} fontSize={"4xl"} lineHeight={1}>
        Miku SNS
      </Text>
      <Spacer />
      <Avatar onClick={() => setAccountId(myAccountId)} size={"sm"} />
    </HStack>
  );
};
