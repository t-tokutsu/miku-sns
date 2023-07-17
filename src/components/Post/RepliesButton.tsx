import { Icon, chakra, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { BiCommentDetail, BiSolidCommentDetail } from "react-icons/bi";
import { TypePost } from "../../features/posts/data/posts";
import { useJotaiPosts } from "../../features/posts/useJotaiPosts";

/** @package */
export const RepliesButton: FC<{
  post: TypePost;
  onOpenDrawer: () => void;
  isActive: boolean;
}> = ({ post, onOpenDrawer, isActive }) => {
  const { getReplies } = useJotaiPosts();
  const repliesLength = getReplies(post.id).length;
  return (
    <chakra.button onClick={onOpenDrawer}>
      <HStack
        color={
          isActive ? "currentcolor" : repliesLength ? "mikuGreen" : undefined
        }
        fontWeight={repliesLength ? "bold" : undefined}
        spacing={0.5}
      >
        <Icon
          as={repliesLength ? BiSolidCommentDetail : BiCommentDetail}
          fontSize={"md"}
        />
        <Text fontSize={"sm"} lineHeight={1} pb={0.5}>
          {repliesLength}
        </Text>
      </HStack>
    </chakra.button>
  );
};
