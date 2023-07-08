import { ReactNode } from "react";

type TypeAccount = {
  name: string;
};

export const accountData: {
  [id: string]: TypeAccount;
} = {
  "1": {
    name: "Alice",
  },
  "2": {
    name: "Bob",
  },
  "3": {
    name: "Carol",
  },
};

type TypeBasicPost = {
  id: string;
  accountId: string;
  date: Date;
  content: ReactNode;
  images: {
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
