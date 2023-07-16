import { ReactNode } from "react";
import { TypeAccountId } from "./accounts";

export type TypePost = {
  id: string;
  accountId: TypeAccountId;
  date: Date;
  content: ReactNode;
  hasImage?: boolean;
  likeAccountIds: TypeAccountId[];
  parentPostId?: string;
};

export const postsData: TypePost[] = [
  {
    id: "1",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    hasImage: true,
    likeAccountIds: [],
  },
  {
    id: "2",
    accountId: "2",
    date: new Date(),
    content: "返信です",
    likeAccountIds: [],
    parentPostId: "1",
  },
  {
    id: "3",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "4",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "5",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "6",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "7",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "8",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "9",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "10",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "11",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "12",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "13",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
  {
    id: "14",
    accountId: "1",
    date: new Date(),
    content: "メインスレッドです",
    likeAccountIds: [],
  },
];
