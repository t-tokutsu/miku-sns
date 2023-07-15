import { IconButton, Stack, StackProps, Textarea } from "@chakra-ui/react";
import { FC, useId, useState } from "react";
import { FiSend } from "react-icons/fi";
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
    <Stack
      alignItems={"flex-end"}
      backdropFilter={"blur(12px)"}
      bg={"rgba(255,255,255,.75)"}
      p={4}
      {...stackProps}
    >
      <Textarea
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder={"ポスト内容"}
        value={content}
      />
      <IconButton
        aria-label={"送信する"}
        fontSize={"2xl"}
        icon={<FiSend />}
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
      />
    </Stack>
  );
};
