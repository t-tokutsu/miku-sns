import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  {
    content:
      "この年になってくると、多腕バンディット問題で言うと終盤なんじゃが、\nでもまだまだ探索したいことがいっぱいあるのー",
  },
  {
    content: "ネイピア数って実はいい奴なんじゃ",
  },
  {
    content:
      "AIがもっと進化してくれたら、AIおばあちゃんにパワーアップできるぞい",
  },
];

export const female_60_science: TypePost[] = getPostsArray(
  "female_60_science",
  postsArray
);
