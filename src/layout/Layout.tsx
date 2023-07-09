import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Player } from "../features/player";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <SimpleGrid alignItems={"stretch"} gridTemplateColumns={"auto 1fr"}>
      {/* メニューエリア */}
      <Stack bg={"green.100"} w={"200px"}>
        <Box>ロゴ</Box>
        <Stack>
          <Box>メニュー</Box>
          <Box>メニュー</Box>
          <Box>メニュー</Box>
          <Box>メニュー</Box>
        </Stack>
      </Stack>
      {/* メインエリア */}
      <Box bg={"red.100"} minH={"100vh"} pos={"relative"}>
        <Box>{children}</Box>
        <Player bottom={4} left={4} pos={"absolute"} right={4} />
      </Box>
    </SimpleGrid>
  );
};
