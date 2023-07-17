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
import { useSwipeable } from "react-swipeable";
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

  const onDrawerClose = () => {
    onClose();
    setTimeout(() => {
      setParentPostId(undefined);
    }, 200);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => onDrawerClose(),
  });

  if (!parentPostId) return null;
  if (!parentPost) return null;

  return (
    <Drawer isOpen={isOpen} onClose={onDrawerClose} size={"full"}>
      <DrawerOverlay />
      <DrawerContent {...handlers}>
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
              onClick={onDrawerClose}
            />
            <Text fontSize={"sm"} textAlign={"center"}>
              返信欄
            </Text>
          </SimpleGrid>
        </DrawerHeader>
        <DrawerBody p={0}>
          <SimpleGrid gridTemplateRows={"auto auto 1fr"} h={"full"}>
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
            <RepliesInput parentPostId={parentPostId} />
            <Stack overflow={"auto"} p={4}>
              {getReplies(parentPostId).map((reply) => (
                <Post key={reply.id} post={reply} />
              ))}
            </Stack>
          </SimpleGrid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
