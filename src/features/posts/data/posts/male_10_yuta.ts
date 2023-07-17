import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  { content: "今日のバスケの練習、みんなすごい気合い入ってた！" },
  {
    content: "神奈川のバスケ部の仲間たちはみんな超絶上手いんだよなぁ。",
    imageName: "1.jpeg",
  },
  { content: "大学バスケ、最近まじでアツい" },
];

export const male_10_yuta: TypePost[] = getPostsArray(
  "male_10_yuta",
  postsArray
);
