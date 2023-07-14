import { ReactNode } from "react";
import { TypeAccountId } from "./accounts";

export type TypePost = {
  id: string;
  accountId: TypeAccountId;
  date: Date;
  content: ReactNode;
  images?: {
    src: string;
  }[];
  likeAccountIds: TypeAccountId[];
  replies: TypePost[];
};

export const postsData: TypePost[] = [];
