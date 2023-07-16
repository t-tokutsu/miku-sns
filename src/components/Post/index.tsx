import {
  HStack,
  Avatar,
  Stack,
  Text,
  Spacer,
  Box,
  BoxProps,
  chakra,
  Center,
} from "@chakra-ui/react";
import { FC } from "react";
import { useJotaiAccountId } from "../../features/account/useJotaiAccountId";
import { accountData } from "../../features/posts/data/accounts";
import { TypePost } from "../../features/posts/data/posts";
import { Likes } from "./Likes";
import { PostDate } from "./PostDate";
import { PostPlayer } from "./PostPlayer";
import { Replies } from "./Replies";

export const Post: FC<{
  post: TypePost;
  boxProps?: BoxProps;
  isActive?: boolean;
}> = ({ post, boxProps, isActive = false }) => {
  const { setAccountId } = useJotaiAccountId();
  const { id, accountId, date, content, hasImage, hasPlayer } = post;
  return (
    <Box
      bg={"gradation.green"}
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
        <Avatar
          bg={"gradation.green"}
          onClick={() => setAccountId(accountId)}
          p={0.5}
          size={"sm"}
          src={`/images/accounts/${accountId}/icon.jpg`}
        />
        <Stack spacing={1} w={"full"}>
          <HStack>
            <Text
              fontSize={"sm"}
              fontWeight={"bold"}
              onClick={() => setAccountId(accountId)}
            >
              {accountData[accountId].name}
            </Text>
            <Spacer />
            <PostDate date={date} />
          </HStack>
          <Stack>
            <Text fontSize={"sm"} whiteSpace={"pre-wrap"}>
              {content}
            </Text>
            {/* 画像 */}
            {hasImage && (
              <Center>
                <chakra.img
                  alt=""
                  maxH={isActive ? "200px" : "300px"}
                  src={`/images/posts/${id}.png`}
                />
              </Center>
            )}
            {hasPlayer && <PostPlayer />}
            <HStack spacing={4}>
              <Likes post={post} />
              <Replies isActive={isActive} post={post} />
            </HStack>
          </Stack>
        </Stack>
      </HStack>
    </Box>
  );
};
