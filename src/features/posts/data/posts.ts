import { ReactNode } from "react";
import { TypeAccountId } from "./accounts";

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
  {
    id: "1",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    hasImage: true,
  },
  {
    id: "2",
    accountId: "2",
    date: new Date(),
    content: "返信です",
    parentPostId: "1",
  },
  {
    id: "player",
    accountId: "miku",
    date: new Date(),
    content: "聴いてね！！",
    hasPlayer: true,
  },
  {
    id: "3",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "4",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "5",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "6",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "7",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "8",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "9",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "10",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "11",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "12",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "13",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "14",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
  },
  {
    id: "license_miku",
    accountId: "license",
    date: new Date(),
    content:
      "「初音ミク」はクリプトン・フューチャー・メディア株式会社の著作物です。\n© Crypton Future Media, INC. www.piapro.net",
  },
];
