import { HStack, Text, chakra, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { TypeAccountId } from "./data/accounts";
import { TypePost } from "./data/posts";
import { useJotaiPosts } from "./useJotaiPosts";

export const Likes: FC<{
  post: TypePost;
}> = ({ post: { id, likeAccountIds } }) => {
  const { setPosts } = useJotaiPosts();
  const userAccountId: TypeAccountId = "1";
  const isLiked = likeAccountIds.some(
    (likeAccountId) => likeAccountId === userAccountId
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
              (likeAccountId) => likeAccountId !== userAccountId
            );
          } else {
            targetPost.likeAccountIds.push(userAccountId);
          }
        })
      }
    >
      <HStack>
        <Icon as={isLiked ? BsHeartFill : BsHeart} />
        <Text>{likeAccountIds.length}</Text>
      </HStack>
    </chakra.button>
  );
};
