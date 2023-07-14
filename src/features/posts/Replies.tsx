import {
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
} from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "../../components/Post";
import { TypePostDatum } from "./data/posts";

/** @package */
export const Replies: FC<{
  post: TypePostDatum;
}> = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link onClick={onOpen}>返信 {post.replies.length}件</Link>
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
              <Post
                key={reply.id}
                post={{
                  ...reply,
                  replies: [],
                }}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
