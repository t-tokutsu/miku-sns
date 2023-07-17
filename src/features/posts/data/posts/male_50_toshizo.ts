import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  {
    content:
      "昨日のライブは最高だった！音楽の力で心が揺さぶられた瞬間フォーエバー",
    imageName: "1.jpeg",
  },
  {
    content: "今度はラップに挑戦してみようかのー",
  },
  {
    content: "サブドミナントマイナーの響きが心を癒すんじゃ",
  },
  {
    content:
      "ロックのエッセンスを取り入れた新曲を作ってみた。自分の表現を音楽に乗せる喜びを感じる。",
  },
];

export const male_50_toshizo: TypePost[] = getPostsArray(
  "male_50_toshizo",
  postsArray
);
