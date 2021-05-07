import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useModal } from "react-modal-hook";
import TextDTO from "../../dto/TextDTO";
import EditTextModal from "./EditTextModal";
import useDeleteText from "../../api-hooks/text/useDeleteText";

type Props = { text: TextDTO };

const TextItem: React.FC<Props> = ({ text }) => {
  const [showEditModal, hideEditModal] = useModal(() => (
    <EditTextModal isOpen onClose={hideEditModal} text={text} />
  ));
  const { mutate: deleteText } = useDeleteText();

  const handleEdit = () => {
    showEditModal();
  };

  const handleDelete = () => {
    deleteText({ id: text._id });
  };

  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {text.name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        {text.text}
        <Flex direction="row-reverse">
          <Button size="sm" color="red" mx={0.5} onClick={handleDelete}>
            <DeleteIcon />
          </Button>
          <Button size="sm" mx={0.5} onClick={handleEdit}>
            <EditIcon />
          </Button>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default TextItem;
