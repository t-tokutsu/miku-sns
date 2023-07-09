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
import { TypeBasicPost } from "./data/posts";

/** @package */
export const Replies: FC<{
  replies: TypeBasicPost[];
}> = ({ replies }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link onClick={onOpen}>返信 {replies.length}件</Link>
      <Drawer isOpen={isOpen} onClose={onClose} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>返信</DrawerHeader>
          <DrawerBody>
            {replies.map((reply) => (
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
