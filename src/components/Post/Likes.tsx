import { HStack, Text, chakra, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { myAccountId } from "../../features/posts/data/accounts";
import { TypePost } from "../../features/posts/data/posts";
import { useJotaiPosts } from "../../features/posts/useJotaiPosts";

export const Likes: FC<{
  post: TypePost;
}> = ({ post: { id, likeAccountIds } }) => {
  const { setPosts } = useJotaiPosts();
  const isLiked = likeAccountIds.some(
    (likeAccountId) => likeAccountId === myAccountId
  );
  return (
    <chakra.button
      onClick={() =>
        setPosts((draft) => {
          const targetPost = draft.find(
            ({ id: draftPostId }) => draftPostId === id
          );
          if (!targetPost?.likeAccountIds) return;
          if (isLiked) {
            targetPost.likeAccountIds = targetPost.likeAccountIds.filter(
              (likeAccountId) => likeAccountId !== myAccountId
            );
          } else {
            targetPost.likeAccountIds.push(myAccountId);
          }
        })
      }
    >
      <HStack spacing={1}>
        <Icon as={isLiked ? BsHeartFill : BsHeart} fontSize={"sm"} />
        <Text fontSize={"sm"} lineHeight={1} pb={0.5}>
          {likeAccountIds.length}
        </Text>
      </HStack>
    </chakra.button>
  );
};
