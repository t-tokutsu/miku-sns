import {
  HStack,
  Avatar,
  Stack,
  Text,
  StackProps,
  chakra,
  Icon,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { FC } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { TypeAccountId, accountData } from "../../features/posts/data/accounts";
import { TypePostDatum } from "../../features/posts/data/posts";
import { Replies } from "../../features/posts/Replies";
import { useJotaiPosts } from "../../features/posts/useJotaiPosts";

export const Post: FC<{
  post: TypePostDatum;
  hasReplyButton?: boolean;
  stackProps?: StackProps;
}> = ({ post, hasReplyButton = true, stackProps }) => {
  const { setPosts } = useJotaiPosts();
  const { id, accountId, date, content, likes, replies } = post;
  const userAccountId: TypeAccountId = "1";
  const isLiked = likes.some((like) => like.accountId === userAccountId);
  return (
    <HStack
      alignItems={"flex-start"}
      bg={"white"}
      borderBottomColor={"blackAlpha.700"}
      borderBottomWidth={1}
      justifySelf={"stretch"}
      key={id}
      p={4}
      {...stackProps}
    >
      <Avatar />
      <Stack w={"full"}>
        <HStack justifyContent={"flex-start"}>
          <Text>{accountData[accountId].name}</Text>
          <Text>{format(date, "yyyy/MM/dd")}</Text>
        </HStack>
        <Text>{content}</Text>
        <HStack>
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
          <Text>コメント数</Text>
          {hasReplyButton && replies.length && <Replies post={post} />}
        </HStack>
      </Stack>
    </HStack>
  );
};
