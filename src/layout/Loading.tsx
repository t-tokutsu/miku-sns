import { Center, Text, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { usePlayerListener } from "../features/player/hooks/usePlayerListener";

export const Loading: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  usePlayerListener({
    onVideoReady: () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2 * 1000);
    },
  });
  return isLoading ? (
    <Center bg={"gradation.green"} inset={0} pos={"fixed"} zIndex={"overlay"}>
      <VStack spacing={8}>
        <Triangle
          ariaLabel={"triangle-loading"}
          color={"white"}
          height={"80"}
          visible={true}
          width={"80"}
        />
        <Text
          color={"white"}
          fontFamily={"barcode"}
          fontSize={"4xl"}
          lineHeight={1}
        >
          Miku SNS
        </Text>
      </VStack>
    </Center>
  ) : null;
};
