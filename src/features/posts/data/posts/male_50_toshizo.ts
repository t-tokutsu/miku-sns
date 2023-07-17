import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  {
    content: "昨日のライブは最高だった！音楽の力で心が揺さぶられた瞬間だった。",
    imageName: "1.jpeg",
  },
  // {
  //   content:
  //     "若い頃にリリースしたCDの思い出が蘇ってくる。あの頃の情熱を忘れずに生きていきたい。",
  // },
  // {
  //   content: "最近はヴィンテージの楽器にハマっている。音色が独特で魅了される。",
  // },
  // { content: "音楽を奏でることで日常のストレスを解消できる。心のオアシスだ。" },
  // {
  //   content:
  //     "ライブハウスで見かけた新人バンドに感動！音楽の未来を感じた瞬間だった。",
  // },
  // {
  //   content: "キーボードを演奏する時、まるで魂が揺さぶられるような感覚がある。",
  // },
  // {
  //   content:
  //     "お気に入りのロックバンドの新曲が公開された！熱いメッセージが詰まっていて感動した。",
  // },
  // {
  //   content:
  //     "音楽のジャンルを超えて、さまざまなアーティストに敬意を持っている。音楽は国境を超える力を持っているんだな。",
  // },
  // {
  //   content: "50代という年齢でもまだまだ音楽を奏でることに情熱を燃やしている。",
  // },
  // {
  //   content:
  //     "音楽仲間とのセッションが楽しみで仕方ない！共鳴する音楽を奏でる喜びを分かち合える仲間がいることに感謝している。",
  // },
  // {
  //   content: "音楽の歴史を追いかけるのが好きで、貴重な音源を集めるのが趣味だ。",
  // },
  // {
  //   content: "懐かしの名曲を聴きながら、当時の思い出に浸るのが至福のひととき。",
  // },
  // {
  //   content:
  //     "ロックのエッセンスを取り入れた新曲を作ってみた。自分の表現を音楽に乗せる喜びを感じる。",
  // },
  // {
  //   content:
  //     "ミュージシャンたちのドキュメンタリー映画を観ると、音楽の奥深さに改めて感動する。",
  // },
  // { content: "音楽祭の季節がやってきた！新たな出会いと音楽の融合に胸が躍る。" },
  // {
  //   content: "演奏中に会場が一体となって踊り出す瞬間は最高の高揚感を味わえる。",
  // },
  // {
  //   content:
  //     "ロックンロールのエネルギーは年齢に関係なく、心を揺さぶる力を持っている。",
  // },
  // { content: "音楽を通じて人々と繋がることができる喜びに感謝している。" },
  // {
  //   content:
  //     "ライブに行くと、音楽を愛する仲間たちとの絆を再確認できる。彼らとの時間が宝物だ。",
  // },
  // {
  //   content:
  //     "自分の音楽を応援してくれるファンの存在に支えられていることに感謝の気持ちでいっぱいだ。",
  // },
];

export const male_50_toshizo: TypePost[] = getPostsArray(
  "male_50_toshizo",
  postsArray
);
