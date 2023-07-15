import {
  HStack,
  Avatar,
  Stack,
  Text,
  Spacer,
  Box,
  BoxProps,
  Collapse,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { FC, useLayoutEffect, useState } from "react";
import { accountData } from "../../features/posts/data/accounts";
import { TypePost } from "../../features/posts/data/posts";
import { Likes } from "../../features/posts/Likes";
import { Replies } from "../../features/posts/Replies";

export const Post: FC<{
  post: TypePost;
  boxProps?: BoxProps;
  isActive?: boolean;
}> = ({ post, boxProps, isActive = false }) => {
  const { id, accountId, date, content } = post;
  const [isShow, setIsShow] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 100);
  }, []);
  return (
    <Collapse animateOpacity in={isShow}>
      <Box
        bg={
          "linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))"
        }
        borderRadius={8}
        id={post.id}
        p={0.5}
        {...boxProps}
      >
        <HStack
          alignItems={"flex-start"}
          backdropFilter={"blur(12px)"}
          bg={!isActive ? "white" : undefined}
          borderRadius={6}
          justifySelf={"stretch"}
          key={id}
          p={3}
        >
          <Avatar size={"sm"} />
          <Stack spacing={1} w={"full"}>
            <HStack>
              <Text fontSize={"md"} fontWeight={"bold"}>
                {accountData[accountId].name}
              </Text>
              <Spacer />
              <Text fontSize={"sm"}>{format(date, "yyyy/MM/dd")}</Text>
            </HStack>
            <Stack>
              <Text fontSize={"sm"} whiteSpace={"pre-wrap"}>
                {content}
              </Text>
              <HStack spacing={4}>
                <Likes post={post} />
                <Replies isActive={isActive} post={post} />
              </HStack>
            </Stack>
          </Stack>
        </HStack>
      </Box>
    </Collapse>
  );
};
