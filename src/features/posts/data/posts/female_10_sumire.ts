import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  {
    content:
      "好きなアニメの最新話、感動して涙が止まらなかった…。キャラクターたちの心の葛藤に共感してしまう。",
  },
  {
    content: "なんだかんだ、長野っていいところだなー\nお店少ないけど",
    imageName: "1.jpeg",
  },
  {
    content:
      "お気に入りのアニメキャラクターのイラストを描いてみた。ちょっと恥ずかしいけど、SNSに投稿してみようかな…",
  },
];

export const female_10_sumire: TypePost[] = getPostsArray(
  "female_10_sumire",
  postsArray
);
