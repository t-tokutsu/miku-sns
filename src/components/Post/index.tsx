import {
  HStack,
  Avatar,
  Stack,
  Text,
  StackProps,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { FC } from "react";
import { accountData } from "../../features/posts/data/accounts";
import { TypePost } from "../../features/posts/data/posts";
import { Likes } from "../../features/posts/Likes";
import { Replies } from "../../features/posts/Replies";

export const Post: FC<{
  post: TypePost;
  stackProps?: StackProps;
}> = ({ post, stackProps }) => {
  const { id, accountId, date, content } = post;
  return (
    <Box
      bg={
        "linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))"
      }
      borderRadius={8}
      p={0.5}
    >
      <HStack
        alignItems={"flex-start"}
        backdropFilter={"blur(12px)"}
        bg={"white"}
        borderRadius={6}
        justifySelf={"stretch"}
        key={id}
        p={3}
        {...stackProps}
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
            <Text fontSize={"sm"} whiteSpace={"pre"}>
              {content}
            </Text>
            <HStack spacing={4}>
              <Likes post={post} />
              <Replies post={post} />
            </HStack>
          </Stack>
        </Stack>
      </HStack>
    </Box>
  );
};
