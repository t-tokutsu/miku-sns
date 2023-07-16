import { subHours } from "date-fns";
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
    date: subHours(new Date(), (index + 1) * 10),
    content,
    imageName,
    likeAccountIds: accountIds.flatMap((accountId) =>
      Math.random() < 0.5 && accountId !== myAccountId ? [accountId] : []
    ),
  }));
};
