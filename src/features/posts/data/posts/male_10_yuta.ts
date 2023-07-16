import { subHours } from "date-fns";
import { v4 } from "uuid";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  { content: "今日のバスケの練習、みんなとっても頑張ってた！" },
  { content: "神奈川のバスケ部の仲間たちはみんな超絶上手いんだよなぁ。" },
  { content: "最近の試合は接戦が多くて、勝ち負けが本当にわからない。" },
  { content: "バスケの練習後はいつもヘトヘトだけど、達成感があって最高！" },
  {
    content: "ドリブルが苦手で悩んでるんだけど、どうやったら上手くなれるかな？",
  },
  {
    content:
      "試合でダンクを決めたい夢がある！まだまだ届く距離ではないけど頑張るぞ！",
  },
  { content: "バスケ部の合宿が楽しみで仕方ない！仲間との思い出が増える予感。" },
  {
    content:
      "ライバル校との試合、緊張が止まらない…でもそれがまたドキドキするんだよね。",
  },
  { content: "神奈川はバスケが盛んで、他の学校との対抗戦は本当に熱い！" },
  { content: "夏休みは個人練習に励むぞ！自分のスキルアップに時間を使いたい。" },
  { content: "バスケの試合後のシャワーは爽快感がたまらない！" },
  {
    content: "空いた時間にバスケの動画を見るのが楽しみ。プロのプレーに憧れる！",
  },
  { content: "スモールフォワードのポジション、自分に合っている気がする。" },
  { content: "バスケ部の先輩たちは本当に優しくて頼りになる存在だ。" },
  { content: "バスケの試合で活躍するためには、体力作りが欠かせない。" },
  {
    content:
      "バスケ以外の運動も楽しい！休日には友達と一緒にサッカーしたりしてる。",
  },
  {
    content:
      "試合前の緊張感がたまらない！でも、それがプレーの一部だから頑張れる。",
  },
  { content: "バスケの練習後はいつもお腹がペコペコ…ご飯が美味しい瞬間！" },
  {
    content:
      "バスケの試合で仲間がスリーポイントを決めると、みんなで盛り上がる！",
  },
  {
    content:
      "バスケの試合に負けた時は悔しいけど、それを糧に次の試合に向けて頑張る！",
  },
];

export const male_10_yuta: TypePost[] = postsArray.map(
  ({ content, imageName }, index) => ({
    id: v4(),
    accountId: "male_10_yuta",
    date: subHours(new Date(), (index + 1) * 10),
    content,
    imageName,
  })
);
