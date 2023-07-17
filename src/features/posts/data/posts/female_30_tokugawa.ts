import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  {
    content: "あー、疲れた\n全力でだらだらしたい。",
  },
  {
    content: "ダムが好きすぎて、もはや治水に興味が出てきた。",
  },
  {
    content: "地元のとうもろこしがやっぱ一番美味しい",
  },
];

export const female_30_tokugawa: TypePost[] = getPostsArray(
  "female_30_tokugawa",
  postsArray
);
