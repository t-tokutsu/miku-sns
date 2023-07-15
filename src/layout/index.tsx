import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Player } from "../features/player";
import { PostButton } from "../features/postButton";
import { Header } from "./Header";
import { Loading } from "./Loading";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Box>
        {/* ヘッダーエリア */}
        <Header />
        {/* メインエリア */}
        <Box bg={"#f5f7fa"} pos={"relative"}>
          <Box>
            <Box>{children}</Box>
            <Box bottom={2} m={2} pos={"sticky"}>
              <Player />
            </Box>
          </Box>
        </Box>
        {/* 投稿ボタン */}
        <PostButton />
      </Box>
      {/* ローディング */}
      <Loading />
    </>
  );
};
