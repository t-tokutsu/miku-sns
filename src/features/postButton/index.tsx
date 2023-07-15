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
        bg={"linear-gradient(to top, #30cfd0 0%, #330867 100%)"}
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
