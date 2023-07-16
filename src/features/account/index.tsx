import {
  Avatar,
  Box,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Post } from "../../components/Post";
import { accountData } from "../posts/data/accounts";
import { useJotaiPosts } from "../posts/useJotaiPosts";
import { useJotaiAccountId } from "./useJotaiAccountId";

export const Account: FC = () => {
  const { accountId, setAccountId } = useJotaiAccountId();
  const { posts } = useJotaiPosts();
  if (!accountId) return null;
  const { name, description } = accountData[accountId];
  const accountPosts = posts.filter(
    ({ accountId: postAccountId }) => postAccountId === accountId
  );
  return (
    <Box>
      <SimpleGrid
        alignItems={"center"}
        bg={"white"}
        gridTemplateColumns={"40px 1fr 40px"}
        p={2}
        pos={"sticky"}
        spacing={0}
        top={0}
        zIndex={"banner"}
      >
        <IconButton
          aria-label={"戻る"}
          bg={"none"}
          fontSize={"2xl"}
          icon={<IoMdArrowRoundBack />}
          onClick={() => setAccountId(undefined)}
        />
        <HStack justifyContent={"center"}>
          <Avatar size={"sm"} src={`/images/accounts/${accountId}/icon.png`} />
          <Text fontSize={"md"} fontWeight={"bold"} textAlign={"center"}>
            {name}
          </Text>
        </HStack>
      </SimpleGrid>
      <Stack maxW={"640px"} mx={"auto"} p={4}>
        <Box
          bg={"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}
          borderRadius={4}
          color={"white"}
          fontSize={"sm"}
          fontWeight={"bold"}
          p={3}
        >
          {description}
        </Box>
        {accountPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Stack>
    </Box>
  );
};
