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
  SimpleGrid,
} from "@chakra-ui/react";
import { FC } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TypePost } from "../../features/posts/data/posts";
import { useJotaiPosts } from "../../features/posts/useJotaiPosts";
import { RepliesInput } from "./RepliesInput";
import { Post } from ".";

/** @package */
export const Replies: FC<{
  post: TypePost;
  isActive: boolean;
}> = ({ post, isActive }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getReplies } = useJotaiPosts();
  const repliesLength = getReplies(post.id).length;
  return (
    <>
      <chakra.button
        onClick={() => {
          if (!isActive) onOpen();
        }}
      >
        <HStack spacing={0.5}>
          <Icon as={BiCommentDetail} fontSize={"md"} />
          <Text fontSize={"sm"} lineHeight={1} pb={0.5}>
            {repliesLength}
          </Text>
        </HStack>
      </chakra.button>
      <Drawer isOpen={isOpen} onClose={onClose} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader p={1}>
            <SimpleGrid
              alignItems={"center"}
              gridTemplateColumns={"40px 1fr 40px"}
              spacing={0}
            >
              <IconButton
                aria-label={"戻る"}
                bg={"none"}
                fontSize={"2xl"}
                icon={<IoMdArrowRoundBack />}
                onClick={onClose}
              />
              <Text fontSize={"md"} textAlign={"center"}>
                返信欄
              </Text>
            </SimpleGrid>
          </DrawerHeader>
          <DrawerBody p={0}>
            <SimpleGrid gridTemplateRows={"auto 1fr auto"} h={"full"}>
              <Post
                boxProps={{
                  pos: "sticky",
                  top: 0,
                  zIndex: 1,
                  borderRadius: 0,
                  fontWeight: "bold",
                }}
                isActive
                post={post}
              />
              <Stack overflow={"auto"} p={4}>
                {getReplies(post.id).map((reply) => (
                  <Post key={reply.id} post={reply} />
                ))}
              </Stack>
              <RepliesInput parentPostId={post.id} />
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
