import { subHours } from "date-fns";
import { v4 } from "uuid";
import { TypePost } from ".";

const postsArray: Pick<TypePost, "content">[] = [];

export const female_30_tokugawa: TypePost[] = postsArray.map(
  ({ content }, index) => ({
    id: v4(),
    accountId: "female_30_tokugawa",
    date: subHours(new Date(), (index + 1) * 10),
    content,
  })
);
