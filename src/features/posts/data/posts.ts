import { ReactNode } from "react";
import { TypeAccountId } from "./accounts";

export type TypeBasicPost = {
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
};

export type TypePostDatum = TypeBasicPost & {
  replies: TypeBasicPost[];
};

export const postsData: TypePostDatum[] = [];
