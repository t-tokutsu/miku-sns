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
  likes: {
    accountId: string;
  }[];
  replies: TypePost[];
};

export const postsData: TypePost[] = [];
