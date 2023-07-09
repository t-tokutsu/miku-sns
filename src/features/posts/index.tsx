import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "../../components/Post";
import { Hooks } from "./Hooks";
import { useJotaiPosts } from "./useJotaiPosts";

export const Posts: FC = () => {
  const { posts } = useJotaiPosts();
  return (
    <>
      <Box>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Box>
      <Hooks />
    </>
  );
};
