import { Avatar, Box, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Hooks } from "./features/player/Hooks";
import { Layout } from "./layout/Layout";

/** @package */
export const App: FC = () => {
  return (
    <>
      <Layout>
        <Box>
          {/* 投稿 */}
          <HStack>
            <Avatar />
            <Box>
              <Stack>
                <HStack>
                  <Text>アカウント名</Text>
                  <Spacer />
                  <Text>投稿時間</Text>
                </HStack>
                <Text>投稿内容</Text>
                <HStack>
                  <Text>いいね数</Text>
                  <Text>コメント数</Text>
                </HStack>
              </Stack>
            </Box>
          </HStack>
        </Box>
      </Layout>
      <Hooks />
    </>
  );
};
