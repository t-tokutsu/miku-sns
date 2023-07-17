import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  {
    content:
      "研究室では地図やGISを使ってデータ解析してるけど、完全にパズル解く感覚。",
  },
  {
    content: "またゼミ合宿行きたいなー",
  },
  {
    content:
      "久しぶりにピアノ弾きたいけど、賃貸だから無理か。。\n世のピアニストはどうしてるんだろう",
  },
];

export const female_20_mint: TypePost[] = getPostsArray(
  "female_20_mint",
  postsArray
);
