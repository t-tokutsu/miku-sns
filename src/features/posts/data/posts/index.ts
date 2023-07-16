import { ReactNode } from "react";
import { v4 } from "uuid";
import { TypeAccountId } from "../accounts";
import { female_10_sumire } from "./female_10_sumire";
import { female_20_aomori } from "./female_20_aomori";
import { female_20_mint } from "./female_20_mint";
import { female_30_tokugawa } from "./female_30_tokugawa";
import { female_60_science } from "./female_60_science";
import { male_10_yuta } from "./male_10_yuta";
import { male_30_pain } from "./male_30_pain";
import { male_40_totonou } from "./male_40_totonou";
import { male_50_toshizo } from "./male_50_toshizo";

export type TypePost = {
  id: string;
  accountId: TypeAccountId;
  date: Date;
  content: ReactNode;
  imageName?: string;
  hasPlayer?: boolean;
  likeAccountIds?: TypeAccountId[];
  parentPostId?: string;
};

const postsArray: TypePost[] = [
  {
    id: v4(),
    accountId: "miku",
    date: new Date(),
    content: "聴いてね！！",
    hasPlayer: true,
  },
  {
    id: v4(),
    accountId: "license",
    date: new Date(),
    content:
      "「初音ミク」はクリプトン・フューチャー・メディア株式会社の著作物です。\n© Crypton Future Media, INC. www.piapro.net",
  },
];

export const postsData: TypePost[] = [
  ...male_10_yuta,
  ...male_30_pain,
  ...male_40_totonou,
  ...male_50_toshizo,
  ...female_10_sumire,
  ...female_20_aomori,
  ...female_20_mint,
  ...female_30_tokugawa,
  ...female_60_science,
  ...postsArray,
].sort(({ date: dateA }, { date: dateB }) => Number(dateB) - Number(dateA));
