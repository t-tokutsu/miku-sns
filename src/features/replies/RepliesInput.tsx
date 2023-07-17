import {
  Box,
  HStack,
  IconButton,
  StackProps,
  Textarea,
} from "@chakra-ui/react";
import { FC } from "react";
import { FiSend } from "react-icons/fi";
import { usePostWithKey } from "../postButton/usePostWithKey";

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
    <HStack bg={"gradation.green"} pb={1} px={1} spacing={1} {...stackProps}>
      <Box borderRadius={8} p={0.5} w={"full"}>
        <Textarea
          bg={"white"}
          borderWidth={0}
          fontSize={"md"}
          h={"40px"}
          minH={"auto"}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          p={2}
          placeholder={"返信内容を入力する"}
          value={content}
        />
      </Box>
      <IconButton
        aria-label={"ポストする"}
        bg={"gradation.purple"}
        color={"white"}
        fontSize={"xl"}
        h={"40px"}
        icon={<FiSend />}
        minW={"40px"}
        onClick={post}
        size={"lg"}
      />
    </HStack>
  );
};
