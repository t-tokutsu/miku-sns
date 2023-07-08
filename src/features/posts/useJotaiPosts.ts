import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { TypePostDatum } from "./data";

const postsAtom = atomWithImmer<TypePostDatum[]>([
  {
    id: "1",
    accountId: "1",
    date: new Date(),
    content: "Hello, world!",
    images: [],
    likes: [],
    replies: [],
  },
]);
postsAtom.debugLabel = "postsAtom";

export const useJotaiPosts = () => {
  const [posts, setPosts] = useAtom(postsAtom);
  return { posts, setPosts };
};
