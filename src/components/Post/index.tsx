import {
  HStack,
  Avatar,
  Stack,
  Text,
  Spacer,
  Box,
  BoxProps,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { useJotaiAccountId } from "../../features/account/useJotaiAccountId";
import { accountData } from "../../features/posts/data/accounts";
import { TypePost } from "../../features/posts/data/posts";
import { Likes } from "./Likes";
import { PostDate } from "./PostDate";
import { PostPlayer } from "./PostPlayer";
import { RepliesButton } from "./RepliesButton";
import { RepliesDrawer } from "./RepliesDrawer";

export const Post: FC<{
  post: TypePost;
  boxProps?: BoxProps;
  isActive?: boolean;
}> = ({ post, boxProps, isActive = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setAccountId } = useJotaiAccountId();
  const { id, accountId, date, content, imageName, hasPlayer } = post;
  const onOpenDrawer = () => {
    if (!isActive) onOpen();
  };
  return (
    <>
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
            as={"button"}
            bg={"gradation.green"}
            onClick={() => setAccountId(accountId)}
            p={0.5}
            size={"sm"}
            src={`/images/accounts/${accountId}/icon.jpg`}
          />
          <Stack spacing={1} w={"full"}>
            <HStack>
              <Text
                as={"button"}
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
              <Stack as={"button"} onClick={onOpenDrawer}>
                <Text
                  fontSize={"sm"}
                  textAlign={"left"}
                  whiteSpace={"pre-wrap"}
                >
                  {content}
                </Text>
                {/* 画像 */}
                {imageName && (
                  <chakra.img
                    alignSelf={"center"}
                    alt=""
                    borderRadius={8}
                    loading={"lazy"}
                    maxH={isActive ? "200px" : "300px"}
                    src={`/images/accounts/${accountId}/posts/${imageName}`}
                  />
                )}
              </Stack>
              {hasPlayer && <PostPlayer />}
              <HStack spacing={4}>
                <Likes post={post} />
                <RepliesButton onOpenDrawer={onOpenDrawer} post={post} />
              </HStack>
            </Stack>
          </Stack>
        </HStack>
      </Box>
      <RepliesDrawer isOpen={isOpen} onClose={onClose} post={post} />
    </>
  );
};
