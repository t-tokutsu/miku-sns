import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <Box>{children}</Box>;
};
