type TypeAccount = {
  name: string;
  description: string;
};

export const accountData = {
  // TODO: 以下のライセンス表記を追記する
  // 「初音ミク」はクリプトン・フューチャー・メディア株式会社の著作物です。
  // © Crypton Future Media, INC. www.piapro.net
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
  "1": {
    name: "Alice",
    description: "私はマルマル",
  },
  "2": {
    name: "Bob",
    description: "私はマルマル",
  },
  "3": {
    name: "Carol",
    description: "私はマルマル",
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
