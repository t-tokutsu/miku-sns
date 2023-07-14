import { HStack, Avatar, Stack, Text, StackProps } from "@chakra-ui/react";
import { format } from "date-fns";
import { FC } from "react";
import { accountData } from "../../features/posts/data/accounts";
import { TypePostDatum } from "../../features/posts/data/posts";
import { Replies } from "../../features/posts/Replies";

export const Post: FC<{
  post: TypePostDatum;
  hasReplyButton?: boolean;
  stackProps?: StackProps;
}> = ({ post, hasReplyButton = true, stackProps }) => {
  const { id, accountId, date, content, replies } = post;
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
          <Text>いいね数</Text>
          <Text>コメント数</Text>
          {hasReplyButton && replies.length && <Replies post={post} />}
        </HStack>
      </Stack>
    </HStack>
  );
};
