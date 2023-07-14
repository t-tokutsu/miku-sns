import { Button, Stack, StackProps, Textarea } from "@chakra-ui/react";
import { FC, useId, useState } from "react";
import { useJotaiPosts } from "./useJotaiPosts";

export const RepliesInput: FC<
  {
    parentPostId: string;
  } & StackProps
> = ({ parentPostId, ...stackProps }) => {
  const { setPosts } = useJotaiPosts();
  const [content, setContent] = useState("");
  const uuid = useId();
  return (
    <Stack {...stackProps}>
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
              id: `${uuid}_${Date.now()}`,
              content,
              date: new Date(),
              accountId: "1",
              likeAccountIds: ["2"],
              parentPostId,
            });
          });
        }}
      >
        ポストする
      </Button>
    </Stack>
  );
};
