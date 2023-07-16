import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  { content: "今日の仕事は忙しかったけど、一杯のビールで疲れが吹っ飛んだ！" },
  {
    content:
      "群馬の地酒を堪能して、地元の銘酒に感動した。地元愛が深まる瞬間だった。",
  },
  {
    content:
      "週末は友達とワインバーでゆっくり過ごした。おしゃべりと美味しいお酒の組み合わせは最高！",
  },
  {
    content:
      "疲れた日には自宅で一人で楽しむワインタイムが至福のひととき。自分だけの特別な時間を味わう。",
  },
  {
    content:
      "最近、クラフトビールにハマっている。地元の醸造所で作られたビールの個性が魅力的で、新しい味わいを探求している。",
  },
  {
    content:
      "群馬の地域イベントでお酒の試飲会が開催されると、ワクワクして参加するのが楽しみだ。",
  },
  {
    content:
      "銀行の同僚と飲みに行った時の笑い話が忘れられない！お酒が繋ぐ仲間との絆は特別だ。",
  },
  {
    content:
      "地元の温泉旅館で地酒を楽しむのが好き。美味しいお酒と温泉で心と体を癒す贅沢な時間を過ごす。",
  },
  {
    content:
      "お酒の知識を深めるために、ワインや日本酒のセミナーに参加している。専門家から学ぶことが楽しくてたまらない。",
  },
  {
    content:
      "週末の夜は自宅でカクテルを作りながら、映画を観るのが楽しみ。リラックスしながら酒と映画の世界に浸る。",
  },
  {
    content:
      "地方銀行の忘年会は、お酒とおいしい料理が豊富で楽しいイベントだ。同僚たちとの交流も深まる。",
  },
  {
    content:
      "群馬の地ビール祭りに行ってきた！地元の醸造所のビールを楽しむのは最高の贅沢だった。",
  },
  {
    content:
      "自宅で手作りのカクテルを試作してみた。新しい組み合わせに挑戦するのが楽しくてワクワクする。",
  },
  {
    content:
      "銀行帰りに立ち寄る居酒屋で、地元の郷土料理とお酒を楽しんだ。地元ならではの味わいに舌鼓を打った。",
  },
  {
    content:
      "地域のワインイベントにボランティアとして参加した。お酒好きな仲間たちとの交流は楽しい時間だった。",
  },
  {
    content:
      "飲み仲間との定例会で、新しいバーを開拓した。おしゃれな雰囲気と美味しいお酒に感動した。",
  },
  {
    content:
      "群馬の地酒をプレゼントされた！大切な人との特別な時間に、地元のお酒を楽しむのが最高の贈り物だ。",
  },
  {
    content:
      "銀行の忘年会で行われたワインセミナーに参加して、ワインの魅力に目覚めた。幅広い品種を楽しむことができるのは素晴らしい。",
  },
  {
    content:
      "群馬のお酒好きな友人たちと、地元の酒蔵を巡るツアーを計画している。地酒の奥深さを共に楽しむ旅に期待が高まる。",
  },
  {
    content:
      "お酒とともに料理を作るのが好きで、新しいレシピに挑戦するのが楽しみ。美味しいお酒とお料理のマリアージュを楽しむのが至福のひととき。",
  },
];

export const female_20_aomori: TypePost[] = getPostsArray(
  "female_20_aomori",
  postsArray
);
