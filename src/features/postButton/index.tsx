import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
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
        borderRadius={"full"}
        bottom={6}
        colorScheme={"teal"}
        icon={<BiCommentAdd />}
        onClick={onOpen}
        pos={"fixed"}
        right={6}
        size={"lg"}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ポストする</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PostModalInner onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
