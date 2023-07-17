import { getPostsArray } from "./getPostsArray";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content" | "imageName">[] = [
  {
    content:
      "大学院生の地理学専攻、まったりと研究に励んでるんだけど、チョコミントアイスは最高の癒しアイテム！ストレスフリーになれる味だよね。",
  },
  {
    content:
      "研究室では地図やGISを使ってデータ解析してるんだけど、地理情報のパズルを解く感覚がクセになってるよ。",
  },
  // {
  //   content:
  //     "彼氏がいるから研究の合間でも癒される時間を過ごせる。一緒にいるだけで気持ちが安らぐんだ。",
  // },
  // {
  //   content:
  //     "研究合宿では、地理学仲間と美味しいものを食べながらワイワイ楽しんでる。学問とグルメ、最高の組み合わせだよね！",
  // },
  // {
  //   content:
  //     "広島県民の魅力は食文化にもあるよね。広島風お好み焼きやもみじ饅頭、どれも絶品だからぜひ食べてみて！",
  // },
  // {
  //   content:
  //     "研究に集中してるけど、彼氏とのデートはリフレッシュの一環。広島の景色を眺めながら、二人でのんびり過ごす時間は最高の幸せ。",
  // },
  // {
  //   content:
  //     "チョコミントアイスは最高にクール！甘さと爽やかさのコンビネーションがたまらないんだ。",
  // },
  // {
  //   content:
  //     "研究の合間には広島の自然を満喫しに出かけることもある。山や海、自然のパワーを感じることで気分もリフレッシュ！",
  // },
  // {
  //   content:
  //     "国内学会で広島の地理的な特徴について発表する予定だけど、地元の誇りを胸に自信を持ってプレゼンしたいな。",
  // },
  // {
  //   content:
  //     "大学院生の地理学専攻で、研究の合間には地理的なトリビアを友達に披露して楽しんでる。みんなからは「地理マニア」と呼ばれることもあるんだ。",
  // },
  // {
  //   content:
  //     "彼氏とのデートでは、広島県内の美しい景色をバックに写真を撮りまくるのがお決まり。思い出のアルバムがだんだんと充実していってるよ。",
  // },
  // {
  //   content:
  //     "研究室では地理の論文を読みふけってるけど、帰宅後はリラックスタイム。チョコミントアイスを食べながら好きなドラマを見るのが最高の至福だ。",
  // },
  // {
  //   content:
  //     "広島の地理的な特徴を研究する中で、地元の人々の暖かさや広島弁にも惹かれていってる。地理だけじゃなく人のつながりも大事なんだよね。",
  // },
  // {
  //   content:
  //     "研究合宿では、仲間との交流が楽しみの一つ。地理の話に花を咲かせつつ、夜はみんなで広島の居酒屋をはしごして盛り上がるんだ！",
  // },
];

export const female_20_mint: TypePost[] = getPostsArray(
  "female_20_mint",
  postsArray
);
