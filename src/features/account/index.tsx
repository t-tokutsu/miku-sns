import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Post } from "../../components/Post";
import { accountData } from "../posts/data/accounts";
import { useJotaiPosts } from "../posts/useJotaiPosts";
import { useJotaiAccountId } from "./useJotaiAccountId";

export const Account: FC = () => {
  const { accountId, setAccountId } = useJotaiAccountId();
  const { posts } = useJotaiPosts();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (accountId) onOpen();
  }, [accountId, onOpen]);

  if (!accountId) return null;
  const { name, description } = accountData[accountId];
  const accountPosts = posts.filter(
    ({ accountId: postAccountId }) => postAccountId === accountId
  );

  const onDrawerClose = () => {
    onClose();
    setTimeout(() => {
      setAccountId(undefined);
    }, 200);
  };

  return (
    <Drawer isOpen={isOpen} onClose={onDrawerClose} size={"full"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader bg={"gradation.green"} pb={0.5} pt={0} px={0}>
          <SimpleGrid
            alignItems={"center"}
            bg={"white"}
            gridTemplateColumns={"40px minmax(0, 1fr)"}
            p={2}
            spacing={0}
          >
            <IconButton
              aria-label={"戻る"}
              bg={"none"}
              fontSize={"2xl"}
              icon={<IoMdArrowRoundBack />}
              onClick={onDrawerClose}
            />
            <HStack justifyContent={"center"} pos={"relative"}>
              <Avatar
                size={"sm"}
                src={`./images/accounts/${accountId}/icon.jpg`}
              />
              <Text
                fontSize={"md"}
                fontWeight={"bold"}
                maxW={"full"}
                overflow={"hidden"}
                textAlign={"center"}
                textOverflow={"ellipsis"}
                whiteSpace={"nowrap"}
              >
                {name}
              </Text>
            </HStack>
          </SimpleGrid>
        </DrawerHeader>
        <DrawerBody p={4}>
          <Stack maxW={"640px"} mx={"auto"}>
            <Box
              bg={"gradation.purple"}
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
