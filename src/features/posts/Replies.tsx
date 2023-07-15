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
  Box,
  SimpleGrid,
  IconButton,
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
        <HStack>
          <Icon as={BiCommentDetail} />
          <Text>{getReplies(post.id).length}</Text>
        </HStack>
      </chakra.button>
      <Drawer isOpen={isOpen} onClose={onClose} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <IconButton
              aria-label={"戻る"}
              fontSize={"2xl"}
              icon={<IoMdArrowRoundBack />}
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody p={0}>
            <SimpleGrid gridTemplateRows={"auto 1fr auto"} h={"full"}>
              <Post
                post={post}
                stackProps={{
                  pos: "sticky",
                  top: 0,
                  zIndex: 1,
                }}
              />
              <Box overflow={"auto"}>
                {getReplies(post.id).map((reply) => (
                  <Post key={reply.id} post={reply} />
                ))}
              </Box>
              <RepliesInput parentPostId={post.id} />
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
