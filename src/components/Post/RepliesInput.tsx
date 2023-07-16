import {
  Box,
  HStack,
  IconButton,
  StackProps,
  Textarea,
} from "@chakra-ui/react";
import { FC } from "react";
import { FiSend } from "react-icons/fi";
import { usePostWithKey } from "../../features/postButton/usePostWithKey";

export const RepliesInput: FC<
  {
    parentPostId: string;
  } & StackProps
> = ({ parentPostId, ...stackProps }) => {
  const { post, content, setContent } = usePostWithKey({
    callBack: () => setContent(""),
    parentPostId,
  });

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
        onClick={post}
        size={"lg"}
      />
    </HStack>
  );
};
