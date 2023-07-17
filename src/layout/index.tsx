import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { useJotaiIsPlayerLoaded } from "../jotai/useJotaiPlayer";
import { Loading } from "./Loading";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { isPlayerLoaded } = useJotaiIsPlayerLoaded();
  return (
    <>
      <Box bg={"gray.50"}>
        {/* メインエリア */}
        <Box
          h={isPlayerLoaded ? undefined : 0}
          overflow={isPlayerLoaded ? undefined : "hidden"}
          pos={"relative"}
        >
          {children}
        </Box>
      </Box>
      {/* ローディング */}
      <Loading />
    </>
  );
};
