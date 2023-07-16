type TypeAccount = {
  name: string;
  description: string;
};

export const accountData = {
  miku: {
    name: "初音ミク@その名はもちろん",
    description:
      "未来の音楽を創造するバーチャル・シンガー、初音ミクです！。突然変異中。",
  },
  you: {
    name: "ボカロ好き丸@マジカルミライ2023",
    description:
      "初音ミクをはじめとするバーチャルシンガーやボーカロイドの魅力に夢中なファンです。一緒にボカロワールドを楽しみましょう！",
  },
  // 男性
  male_10_yuta: {
    name: "ゆうた@背番号6",
    description: "バスケ部のイケてるやつ。",
  },
  male_30_pain: {
    name: "つねにおなかいたい",
    description: "サラリーマン",
  },
  male_40_totonou: {
    name: "整うマン",
    description: "エンジニア。多趣味。",
  },
  male_50_toshizo: {
    name: "ハイパーキーボーディスト歳三",
    description: "キーボードで俺にかなうやつはいない。",
  },
  // 女性
  female_10_sumire: {
    name: "平等院すみれ",
    description: "小学生。絵を描くのが趣味",
  },
  female_20_aomori: {
    name: "青森県バリキャリ協会",
    description: "青森県に住んでない",
  },
  female_20_mint: {
    name: "チョコミントアイス過激派",
    description: "彼氏と同棲中の大学院生。",
  },
  female_30_tokugawa: {
    name: "徳川写実斎",
    description: "歴史とダムが好き",
  },
  female_60_science: {
    name: "理系おばあちゃん",
    description: "私はマルマル",
  },
  // その他
  other_: {
    name: "やまおか模型店",
    description: "主に食品サンプルを作っている",
  },
  license: {
    name: "ライセンスbot",
    description: "記載が必要なライセンス文を投稿するbotです。",
  },
} as const satisfies {
  [id: string]: TypeAccount;
};

export const myAccountId: TypeAccountId = "you";
export const mikuAccountId: TypeAccountId = "miku";

export type TypeAccountId = keyof typeof accountData;

export const accountIds: TypeAccountId[] = Object.keys(
  accountData
) as TypeAccountId[];
