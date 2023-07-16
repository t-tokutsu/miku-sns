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

export const postsData: TypePost[] = [];
