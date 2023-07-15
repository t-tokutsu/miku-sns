import {
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  chakra,
  HStack,
  Text,
  IconButton,
  Stack,
  Box,
} from "@chakra-ui/react";
import { FC } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Post } from "../../components/Post";
import { TypePost } from "./data/posts";
import { RepliesInput } from "./RepliesInput";
import { useJotaiPosts } from "./useJotaiPosts";

/** @package */
export const Replies: FC<{
  post: TypePost;
}> = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getReplies } = useJotaiPosts();
  return (
    <>
      <chakra.button onClick={onOpen}>
        <HStack spacing={0.5}>
          <Icon as={BiCommentDetail} fontSize={"md"} />
          <Text fontSize={"sm"} lineHeight={1} pb={0.5}>
            {getReplies(post.id).length}
          </Text>
        </HStack>
      </chakra.button>
      <Drawer isOpen={isOpen} onClose={onClose} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HStack>
              <IconButton
                aria-label={"戻る"}
                fontSize={"2xl"}
                icon={<IoMdArrowRoundBack />}
                onClick={onClose}
              />
              <Text>返信欄</Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody p={0}>
            <Box h={"full"}>
              <Post
                post={post}
                stackProps={{
                  pos: "sticky",
                  top: 0,
                  zIndex: 1,
                  borderRadius: 0,
                }}
              />
              <Stack overflow={"auto"} p={4}>
                {getReplies(post.id).map((reply) => (
                  <Post key={reply.id} post={reply} />
                ))}
              </Stack>
              <RepliesInput bottom={0} parentPostId={post.id} pos={"sticky"} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
