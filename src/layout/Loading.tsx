import { Center, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { Triangle } from "react-loader-spinner";
import { useJotaiIsPlayerLoaded } from "../jotai/useJotaiPlayer";

export const Loading: FC = () => {
  const { isPlayerLoaded } = useJotaiIsPlayerLoaded();
  return (
    <AnimatePresence>
      {!isPlayerLoaded && (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 1 }}>
          <Center
            bg={"gradation.green"}
            inset={0}
            pos={"fixed"}
            zIndex={"overlay"}
          >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
