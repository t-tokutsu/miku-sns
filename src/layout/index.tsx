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
        <Box
          bg={"green.100"}
          display={{
            base: "none",
            md: "block",
          }}
          w={"200px"}
        >
          <Box>ロゴ</Box>
          <Stack>
            <Box>メニュー</Box>
            <Box>メニュー</Box>
            <Box>メニュー</Box>
            <Box>メニュー</Box>
          </Stack>
        </Box>
        {/* メインエリア */}
        <Box
          bgColor={"white"}
          bgImage={"radial-gradient(#888 10%, transparent 10%)"}
          bgSize={"20px 20px"}
          pos={"relative"}
        >
          <Box maxH={"100vh"} overflow={"auto"}>
            <Box>{children}</Box>
            <Box bottom={4} m={4} pos={"sticky"}>
              <Player />
            </Box>
          </Box>
        </Box>
        <PostButton />
      </SimpleGrid>
      <Loading />
    </>
  );
};
