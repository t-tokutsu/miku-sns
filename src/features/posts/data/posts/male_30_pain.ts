import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  { content: "今日も会社でプレッシャーがかかっているなぁ…" },
  { content: "ランチにどこか美味しいお店知ってる人、教えてください！" },
  { content: "ひとり暮らしなので、夕飯はいつもコンビニ弁当かな…" },
];

export const male_30_pain: TypePost[] = getPostsArray(
  "male_30_pain",
  postsArray
);
