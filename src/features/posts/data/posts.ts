import { ReactNode } from "react";

export type TypeBasicPost = {
  id: string;
  accountId: string;
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
