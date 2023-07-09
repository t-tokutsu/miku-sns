import { HStack, Avatar, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { FC } from "react";
import { accountData } from "../../features/posts/data/accounts";
import { TypePostDatum } from "../../features/posts/data/posts";
import { Replies } from "../../features/posts/Replies";

export const Post: FC<{
  post: TypePostDatum;
}> = ({ post: { id, accountId, date, content, replies } }) => {
  return (
    <HStack
      alignItems={"flex-start"}
      borderBottomColor={"blackAlpha.700"}
      borderBottomWidth={1}
      justifySelf={"stretch"}
      key={id}
      p={4}
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
          {replies.length && <Replies replies={replies} />}
        </HStack>
      </Stack>
    </HStack>
  );
};
