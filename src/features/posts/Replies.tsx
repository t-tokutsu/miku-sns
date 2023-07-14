import {
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  chakra,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { Post } from "../../components/Post";
import { TypePost } from "./data/posts";

/** @package */
export const Replies: FC<{
  post: TypePost;
}> = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <chakra.button onClick={onOpen}>
        <HStack>
          <Icon as={BiCommentDetail} />
          <Text>{post.replies?.length}</Text>
        </HStack>
      </chakra.button>
      <Drawer isOpen={isOpen} onClose={onClose} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>返信</DrawerHeader>
          <DrawerBody p={0}>
            <Post
              hasReplyButton={false}
              post={post}
              stackProps={{
                pos: "sticky",
                top: 0,
                zIndex: 1,
              }}
            />
            {post.replies.map((reply) => (
              <Post key={reply.id} post={reply} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
