import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Player } from "../features/player";
import { PostButton } from "../features/postButton";
import { Loading } from "./Loading";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <>
      <SimpleGrid alignItems={"stretch"} gridTemplateColumns={"auto 1fr"}>
        {/* メニューエリア */}
        <Box bg={"green.100"} w={"200px"}>
          <Stack bottom={0} pos={"sticky"} top={0}>
            <Box>ロゴ</Box>
            <Stack>
              <Box>メニュー</Box>
              <Box>メニュー</Box>
              <Box>メニュー</Box>
              <Box>メニュー</Box>
            </Stack>
          </Stack>
        </Box>
        {/* メインエリア */}
        <Box bg={"red.100"} minH={"100vh"} pos={"relative"}>
          <Box>{children}</Box>
          <Box bottom={4} m={4} pos={"sticky"}>
            <Player />
          </Box>
        </Box>
        <PostButton />
      </SimpleGrid>
      <Loading />
    </>
  );
};
