import { HStack, Text, chakra, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { TypeAccountId } from "./data/accounts";
import { TypePostDatum } from "./data/posts";
import { useJotaiPosts } from "./useJotaiPosts";

export const Likes: FC<{
  post: TypePostDatum;
}> = ({ post: { id, likes } }) => {
  const { setPosts } = useJotaiPosts();
  const userAccountId: TypeAccountId = "1";
  const isLiked = likes.some((like) => like.accountId === userAccountId);
  return (
    <chakra.button
      onClick={() =>
        setPosts((draft) => {
          const targetPost = draft.find(
            ({ id: draftPostId }) => draftPostId === id
          );
          if (!targetPost?.likes) return;
          if (isLiked) {
            targetPost.likes = targetPost.likes.filter(
              ({ accountId }) => accountId !== userAccountId
            );
          } else {
            targetPost.likes.push({
              accountId: userAccountId,
            });
          }
        })
      }
    >
      <HStack>
        <Icon as={isLiked ? BsHeartFill : BsHeart} />
        <Text>{likes.length}</Text>
      </HStack>
    </chakra.button>
  );
};
