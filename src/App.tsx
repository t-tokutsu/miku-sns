import { Avatar, Box, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Hooks } from "./features/player/Hooks";
import { accountData } from "./features/posts/data";
import { useJotaiPosts } from "./features/posts/useJotaiPosts";
import { Layout } from "./layout/Layout";

/** @package */
export const App: FC = () => {
  const { posts } = useJotaiPosts();
  return (
    <>
      <Layout>
        {/* 投稿 */}
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
      </Layout>
      <Hooks />
    </>
  );
};
