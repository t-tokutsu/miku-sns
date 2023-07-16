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
      <Box
        bg={
          "linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))"
        }
        borderRadius={8}
        p={0.5}
      >
        <Textarea
          bg={"white"}
          borderWidth={0}
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
          bg={"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}
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
                likeAccountIds: [],
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
