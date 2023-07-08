import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Player } from "../features/player";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <SimpleGrid alignItems={"stretch"} gridTemplateColumns={"auto 1fr"}>
      {/* メニューエリア */}
      <Stack w={"200px"}>
        <Box>ロゴ</Box>
        <Stack>
          <Box>メニュー</Box>
          <Box>メニュー</Box>
          <Box>メニュー</Box>
          <Box>メニュー</Box>
        </Stack>
      </Stack>
      {/* メインエリア */}
      <Box>
        <Box bg={"red.100"} minH={"100vh"}>
          {children}
        </Box>
        <Player />
      </Box>
    </SimpleGrid>
  );
};
