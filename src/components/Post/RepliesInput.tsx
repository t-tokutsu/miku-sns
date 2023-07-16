import {
  Box,
  HStack,
  IconButton,
  StackProps,
  Textarea,
} from "@chakra-ui/react";
import { FC, useId, useState } from "react";
import { FiSend } from "react-icons/fi";
import { myAccountId } from "../../features/posts/data/accounts";
import { useJotaiPosts } from "../../features/posts/useJotaiPosts";

export const RepliesInput: FC<
  {
    parentPostId: string;
  } & StackProps
> = ({ parentPostId, ...stackProps }) => {
  const { setPostWithLike } = useJotaiPosts();
  const [content, setContent] = useState("");
  const uuid = useId();
  return (
    <HStack bg={"gradation.green"} p={1} spacing={1} {...stackProps}>
      <Box borderRadius={8} p={0.5} w={"full"}>
        <Textarea
          bg={"white"}
          borderWidth={0}
          fontSize={"md"}
          h={"48px"}
          minH={"auto"}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          p={2}
          placeholder={"こんなことがあったよ！"}
          value={content}
        />
      </Box>
      <IconButton
        aria-label={"ポストする"}
        bg={"gradation.purple"}
        color={"white"}
        fontSize={"xl"}
        icon={<FiSend />}
        onClick={() => {
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
          setContent("");
        }}
        size={"lg"}
      />
    </HStack>
  );
};
