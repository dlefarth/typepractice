import { PlusSquareIcon } from "@chakra-ui/icons";
import { Accordion, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import useTexts from "../../api-hooks/text/useTexts";
import TextItem from "./TextItem";
import TextDTO from "../../dto/TextDTO";
import { useModal } from "react-modal-hook";
import EditTextModal from "./EditTextModal";

const TextsView: React.FC = () => {
  const { data, isLoading } = useTexts();
  const [showEditModal, hideEditModal] = useModal(() => (
    <EditTextModal isOpen onClose={hideEditModal} />
  ));

  const handleAdd = () => {
    showEditModal();
  };

  if (!data) return <></>;

  return (
    <>
      <Flex justifyContent="space-between" mb="1rem">
        <Heading>Texts</Heading>
        <Button leftIcon={<PlusSquareIcon />} onClick={handleAdd}>
          Add
        </Button>
      </Flex>
      <Accordion allowToggle>
        {data.map((text: TextDTO) => (
          <TextItem text={text} key={text._id} />
        ))}
      </Accordion>
    </>
  );
};

export default TextsView;
