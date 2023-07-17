import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Post } from "../../components/Post";
import { useJotaiPosts } from "../posts/useJotaiPosts";
import { RepliesInput } from "./RepliesInput";
import { useJotaiParentPostId } from "./useJotaiParentId";

export const Replies: FC = () => {
  const { parentPostId, setParentPostId } = useJotaiParentPostId();
  const { posts, getReplies } = useJotaiPosts();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (parentPostId) onOpen();
  }, [parentPostId, onOpen]);
  const parentPost = posts.find(({ id }) => id === parentPostId);

  if (!parentPostId) return null;
  if (!parentPost) return null;

  const onDrawerClose = () => {
    onClose();
    setTimeout(() => {
      setParentPostId(undefined);
    }, 200);
  };

  return (
    <Drawer isOpen={isOpen} onClose={onDrawerClose} size={"full"}>
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
              post={parentPost}
            />
            <Stack overflow={"auto"} p={4}>
              {getReplies(parentPostId).map((reply) => (
                <Post key={reply.id} post={reply} />
              ))}
            </Stack>
            <RepliesInput parentPostId={parentPostId} />
          </SimpleGrid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};