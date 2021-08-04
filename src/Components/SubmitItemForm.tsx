import React from "react";
import Modal from "react-modal";
import "../App.css";
import { priorities } from "../shared/mockData";
import {
  AddButton,
  CancelButton,
  Container,
  SubmitForm,
  SubmitFormButtonsContainer,
  SubmitItemButton,
} from "../styled-components";
import EditInput from "./EditInput";
import PriorityPicker from "./PriorityPicker";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    overflow: "visible",
  },
};

interface IProps {
  addTodo: AddTodo;
  theme: Theme;
}

const SubmitItemForm: React.FC<IProps> = ({ addTodo, theme }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");
  const [selectedPriorityOption, setSelectedPriorityOption] =
    React.useState<string>(priorities[3]);

  const selectPriorityOption = (priority: string) => {
    setSelectedPriorityOption(priority);
  };

  const handleOpenClose = () => {
    setOpen((current: boolean) => !current);
  };

  const handleSubmitTodo = (e: any) => {
    const priority = selectedPriorityOption;
    e.preventDefault();
    addTodo(title, priority);
    handleOpenClose();
    setTitle("");
    setSelectedPriorityOption(priorities[3]);
  };

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <Container>
      <SubmitItemButton onClick={handleOpenClose}>+</SubmitItemButton>
      <Modal isOpen={open} style={customStyles} overlayClassName="overlay">
        <SubmitForm>
          <EditInput value={title} onChange={handleChange} />
          <PriorityPicker
            selectPriorityOption={selectPriorityOption}
            selectedPriorityOption={selectedPriorityOption}
            theme={theme}
          />
          <SubmitFormButtonsContainer>
            <AddButton onClick={handleSubmitTodo}>Add task</AddButton>
            <CancelButton onClick={handleOpenClose}>Cancel</CancelButton>
          </SubmitFormButtonsContainer>
        </SubmitForm>
      </Modal>
    </Container>
  );
};

export default SubmitItemForm;
