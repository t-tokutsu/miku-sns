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
    name: "ボカロ好き丸",
    description:
      "初音ミクをはじめとするボーカロイドのファンです！マジカルミライ楽しみ！",
  },
  // 男性
  male_10_yuta: {
    name: "ゆうた@背番号6",
    description:
      "バスケ最高！憧れの選手はカワイ・レナード。神奈川の中2男子です、気軽に絡んでいってー！",
  },
  male_30_pain: {
    name: "つねにおなかいたい",
    description: "今日も今日とて腹痛。",
  },
  male_40_totonou: {
    name: "整うマン",
    description:
      "フリーランスエンジニア/キャンプ/#サウナ好きと繋がりたい/#今日の積み上げ",
  },
  male_50_toshizo: {
    name: "ハイパーキーボーディスト歳三",
    description: "キーボードで俺にかなうやつはいない。",
  },
  // 女性
  female_10_sumire: {
    name: "平等院すみれ",
    description:
      "イラスト練習中。あまりSNSに慣れていませんが、よろしくお願いします。",
  },
  female_20_aomori: {
    name: "青森県バリキャリ協会",
    description: "バリキャリではありません。青森県にも住んでいません。",
  },
  female_20_mint: {
    name: "チョコミントアイス過激派",
    description: "大学院で地理学を専攻/チョコミン党/広島いいとこだよ",
  },
  female_30_tokugawa: {
    name: "徳川写実斎",
    description: "歴史とダムと静かなところが好きです。",
  },
  female_60_science: {
    name: "サイエンスおばあちゃん",
    description:
      "おばあちゃんですがSNSを始めてみました。数学や物理のアレコレを発信中",
  },
  // その他
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
