import { Button, Stack, Textarea } from "@chakra-ui/react";
import { FC, useId, useState } from "react";
import { useJotaiPosts } from "../posts/useJotaiPosts";

export const PostModalInner: FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const { setPosts } = useJotaiPosts();
  const [content, setContent] = useState("");
  const id = useId();
  return (
    <Stack>
      <Textarea
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder={"ポスト内容"}
        value={content}
      />
      <Button
        onClick={() => {
          setPosts((draft) => {
            draft.unshift({
              id,
              content,
              date: new Date(),
              accountId: "1",
              likeAccountIds: ["2"],
            });
          });
          onClose();
        }}
      >
        ポストする
      </Button>
    </Stack>
  );
};
