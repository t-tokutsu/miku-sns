import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Loading } from "./Loading";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Box bg={"gray.50"} minH={"100vh"}>
        {/* メインエリア */}
        <Box pos={"relative"}>{children}</Box>
      </Box>
      {/* ローディング */}
      <Loading />
    </>
  );
};
