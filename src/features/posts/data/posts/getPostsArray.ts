import { subMinutes } from "date-fns";
import { v4 } from "uuid";
import { TypeAccountId, accountIds, myAccountId } from "../accounts";
import { TypePost } from ".";

export const getPostsArray = (
  accountId: TypeAccountId,
  postsArray: Pick<TypePost, "content" | "imageName">[]
): TypePost[] => {
  return postsArray.map(({ content, imageName }, index) => ({
    id: v4(),
    accountId,
    date: subMinutes(new Date(), index + 1 + 10 * 60 * Math.random()),
    content,
    imageName,
    likeAccountIds: accountIds.flatMap((accountId) =>
      Math.random() < 0.5 && accountId !== myAccountId ? [accountId] : []
    ),
  }));
};
