import { Box, HStack, Avatar, Stack, Spacer, Text } from "@chakra-ui/react";
import { FC } from "react";
import { accountData } from "./data/accounts";
import { Hooks } from "./Hooks";
import { useJotaiPosts } from "./useJotaiPosts";

export const Posts: FC = () => {
  const { posts } = useJotaiPosts();
  return (
    <>
      <Box>
        {posts.map(({ id, accountId, date, content, replies }) => (
          <HStack alignItems={"flex-start"} key={id}>
            <Avatar />
            <Box>
              <Stack>
                <HStack>
                  <Text>{accountData[accountId].name}</Text>
                  <Spacer />
                  <Text>{date.toString()}</Text>
                </HStack>
                <Text>{content}</Text>
                <HStack>
                  <Text>いいね数</Text>
                  <Text>コメント数</Text>
                  {replies.length && <Text>返信 {replies.length}件</Text>}
                </HStack>
              </Stack>
            </Box>
          </HStack>
        ))}
      </Box>
      <Hooks />
    </>
  );
};
