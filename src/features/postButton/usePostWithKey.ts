import { useId, useState } from "react";
import { useKey } from "react-use";
import { myAccountId } from "../posts/data/accounts";
import { useJotaiPosts } from "../posts/useJotaiPosts";

export const usePostWithKey = ({
  callBack,
  parentPostId,
}: {
  callBack?: () => void;
  parentPostId?: string;
}) => {
  const { setPostWithLike } = useJotaiPosts();
  const [content, setContent] = useState("");
  const uuid = useId();

  const post = () => {
    const targetId = `${uuid}_${Date.now()}`;
    setPostWithLike((draft) => {
      draft.unshift({
        id: targetId,
        content,
        date: new Date(),
        accountId: myAccountId,
        parentPostId,
      });
    }, targetId);
    callBack && callBack();
  };

  useKey(
    (event) => event.key === "Enter" && (event.ctrlKey || event.metaKey),
    post
  );

  return {
    post,
    content,
    setContent,
  };
};
