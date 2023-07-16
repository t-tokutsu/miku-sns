import { ReactNode } from "react";
import { v4 } from "uuid";
import { TypeAccountId } from "../accounts";
import { male_10_yuta } from "./male_10_yuta";

export type TypePost = {
  id: string;
  accountId: TypeAccountId;
  date: Date;
  content: ReactNode;
  hasImage?: boolean;
  hasPlayer?: boolean;
  likeAccountIds?: TypeAccountId[];
  parentPostId?: string;
};

export const postsData: TypePost[] = [
  ...male_10_yuta,
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
