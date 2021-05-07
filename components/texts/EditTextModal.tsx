import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import TextDTO from "../../dto/TextDTO";
import { useState } from "react";
import useAddText from "../../api-hooks/text/useAddText";
import useEditText from "../../api-hooks/text/useEditText";

type Props = { onClose: () => void; isOpen: boolean; text?: TextDTO };

const EditTextModal: React.FC<Props> = ({ text: originalText, ...rest }) => {
  const [name, setName] = useState(originalText?.name ?? "");
  const [text, setText] = useState(originalText?.text ?? "");

  const { mutate: addText } = useAddText();
  const { mutate: editText } = useEditText();

  const handleSave = () => {
    if (originalText) {
      editText({name, text, _id: null});
    } else {
      addText({ name, text, _id: null });
    }
  };

  return (
    <Modal {...rest} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{originalText ? "Edit Text" : "New Text"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="name" mb="1rem">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl id="text">
            <FormLabel>Text</FormLabel>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={rest.onClose}>
            Cancel
          </Button>
          <Button colorScheme="teal" mr={3} onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTextModal;
