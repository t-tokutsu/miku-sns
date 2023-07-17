import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  IconButton,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FC } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TypePost } from "../../features/posts/data/posts";
import { useJotaiPosts } from "../../features/posts/useJotaiPosts";
import { RepliesInput } from "./RepliesInput";
import { Post } from ".";

/** @package */
export const RepliesDrawer: FC<{
  post: TypePost;
  isOpen: boolean;
  onClose: () => void;
}> = ({ post, isOpen, onClose }) => {
  const { getReplies } = useJotaiPosts();
  return (
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
  );
};
