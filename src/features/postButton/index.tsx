import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { BiCommentAdd } from "react-icons/bi";
import { PostModalInner } from "./PostModalInner";

export const PostButton: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label={"ポストする"}
        bg={"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}
        borderRadius={"full"}
        bottom={16}
        color={"white"}
        fontSize={"xl"}
        icon={<BiCommentAdd />}
        onClick={onOpen}
        pos={"fixed"}
        right={4}
        size={"lg"}
      />
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={4} p={2}>
          <ModalCloseButton />
          <Stack>
            <ModalHeader fontSize={"md"} p={0} textAlign={"center"}>
              ポスト
            </ModalHeader>
            <ModalBody p={0}>
              <PostModalInner onClose={onClose} />
            </ModalBody>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};
