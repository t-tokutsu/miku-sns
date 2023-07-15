import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "../../components/Post";
import { Hooks } from "./Hooks";
import { useJotaiPosts } from "./useJotaiPosts";

export const Posts: FC = () => {
  const { posts } = useJotaiPosts();
  const mainPosts = posts.filter(({ parentPostId }) => !parentPostId);
  return (
    <>
      <Stack maxW={"640px"} mx={"auto"} p={2}>
        {mainPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Stack>
      <Hooks />
    </>
  );
};
