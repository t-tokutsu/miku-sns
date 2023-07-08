import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <SimpleGrid gridTemplateColumns={"auto 1fr"}>
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
      <Box>{children}</Box>
    </SimpleGrid>
  );
};
