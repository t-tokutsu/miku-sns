import { Box, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "../../components/Post";
import { Header } from "../../layout/Header";
import { Player } from "../player";
import { PostButton } from "../postButton";
import { Hooks } from "./Hooks";
import { useJotaiPosts } from "./useJotaiPosts";

export const Posts: FC = () => {
  const { posts } = useJotaiPosts();
  const mainPosts = [...posts].filter(({ parentPostId }) => !parentPostId);
  return (
    <>
      {/* ヘッダーエリア */}
      <Header />
      {/* メインエリア */}
      <Box>
        <Stack maxW={"640px"} mx={"auto"} p={2}>
          {mainPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Stack>
        <Player />
      </Box>
      {/* 投稿ボタン */}
      <PostButton />
      <Hooks />
    </>
  );
};
