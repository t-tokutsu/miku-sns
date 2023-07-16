import { subHours } from "date-fns";
import { v4 } from "uuid";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  { content: "今日も会社でプレッシャーがかかっているなぁ…" },
  { content: "大阪の雨はやっぱり憂鬱だなぁ。" },
  { content: "最近、仕事のストレスで疲れ切ってしまってる…" },
  { content: "週末は家でまったり過ごしたい気分だなぁ。" },
  { content: "ランチにどこか美味しいお店知ってる人、教えてください！" },
  { content: "今日の通勤ラッシュ、本当に辛い…。" },
  { content: "仕事のミスをしてしまって反省中。自己嫌悪です…。" },
  {
    content:
      "この間の飲み会、みんな楽しそうだったなぁ。自分ももっと社交的になりたい。",
  },
  { content: "休日は家でゲームしている時間が一番癒される。" },
  { content: "仕事のプレゼンが上手くいかなかった…自信がなくなってきた。" },
  { content: "最近、運動不足が気になるなぁ。運動する時間を作らないと。" },
  { content: "ひとり暮らしなので、夕飯はいつもコンビニ弁当かな…" },
  { content: "新しいプロジェクトがスタートしてドキドキしている。" },
  { content: "明日の朝は早起きしないといけないのに、なかなか寝付けない…" },
  { content: "外食ばかりで節約ができてないなぁ。お金の使い方考えないと。" },
  { content: "電車の中で見かけた可愛い犬が癒された♡" },
  { content: "趣味の写真を撮る時間が欲しいなぁ。ストレス発散になるのに。" },
  { content: "職場の人間関係がちょっと複雑で悩んでいる…" },
  { content: "週末に友達と飲みに行く予定があるけど、ちょっと疲れているなぁ。" },
  { content: "夏の暑さが辛い…クーラーの効いた部屋でゆっくり過ごしたい。" },
];

export const male_30_pain: TypePost[] = postsArray.map(
  ({ content }, index) => ({
    id: v4(),
    accountId: "male_30_pain",
    date: subHours(new Date(), (index + 1) * 10),
    content,
  })
);
