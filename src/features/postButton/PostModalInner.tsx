import { Box, HStack, IconButton, Stack, Textarea } from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { FiSend } from "react-icons/fi";
import { usePostWithKey } from "./usePostWithKey";

export const PostModalInner: FC<{
  onClose: () => void;
  initialRef: RefObject<HTMLTextAreaElement>;
}> = ({ onClose, initialRef }) => {
  const { post, content, setContent } = usePostWithKey({
    callBack: onClose,
  });
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
          ref={initialRef}
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
          onClick={post}
          size={"lg"}
        />
      </HStack>
    </Stack>
  );
};
