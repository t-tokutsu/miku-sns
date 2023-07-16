import { Box, HStack, IconButton, Stack, Textarea } from "@chakra-ui/react";
import { FC, useId, useState } from "react";
import { FiSend } from "react-icons/fi";
import { myAccountId } from "../posts/data/accounts";
import { useJotaiPosts } from "../posts/useJotaiPosts";

export const PostModalInner: FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const { setPostWithLike } = useJotaiPosts();
  const [content, setContent] = useState("");
  const uuid = useId();
  return (
    <Stack>
      <Box bg={"gradation.green"} borderRadius={8} p={0.5}>
        <Textarea
          bg={"white"}
          borderWidth={0}
          fontSize={"md"}
          minH={"160px"}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          p={2}
          placeholder={"こんなことがあったよ！"}
          value={content}
        />
      </Box>
      <HStack justifyContent={"flex-end"}>
        <IconButton
          aria-label={"ポストする"}
          bg={"gradation.purple"}
          color={"white"}
          fontSize={"xl"}
          icon={<FiSend />}
          onClick={() => {
            setPostWithLike((draft) => {
              draft.unshift({
                id: uuid,
                content,
                date: new Date(),
                accountId: myAccountId,
              });
            }, uuid);
            onClose();
          }}
          size={"lg"}
        />
      </HStack>
    </Stack>
  );
};
