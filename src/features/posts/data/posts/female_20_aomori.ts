import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  {
    content:
      "最近、クラフトビールにハマっている。おつまみとかも自分で作れるようになりたいなー。",
    imageName: "2.jpeg",
  },
  {
    content: "餃子はなんでこんなに美味いのか委員会",
    imageName: "3.jpeg",
  },
  {
    content: "車上荒らしって、荒らしてるの車中だから車中荒らしじゃない？",
  },
];

export const female_20_aomori: TypePost[] = getPostsArray(
  "female_20_aomori",
  postsArray
);
