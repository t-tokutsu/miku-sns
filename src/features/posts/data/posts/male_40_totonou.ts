import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  {
    content:
      "今日もリモートワークで自宅オフィスにいます。\nもはやカフェより自宅の方が快適になってきた😃",
    imageName: "1.jpeg",
  },
  {
    content:
      "サウナに行った後の爽快感は格別！心も体もリフレッシュできる最高の時間だった。",
  },
  {
    content:
      "今度の休暇は海外旅行に行こうと思ってる。新たな文化に触れるのが楽しみ！",
  },
  {
    content:
      "新しい技術を学ぶためのオンラインセミナーに参加中。常に自己成長を意識している。",
  },
];

export const male_40_totonou: TypePost[] = getPostsArray(
  "male_40_totonou",
  postsArray
);
