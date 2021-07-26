import React from "react";
import Modal from "react-modal";
import "../App.css";
import { priorities } from "../shared/mockData";
import {
  AddButton,
  CancelButton,
  SubmitForm,
  SubmitFormButtonsContainer,
  SubmitItemButton,
  SubmitItemInput,
} from "../styled-components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
  },
};

interface IProps {
  addTodo: AddTodo;
}

const SubmitItemForm: React.FC<IProps> = ({ addTodo }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");
  const [visible, setVisible] = React.useState<boolean>(false);
  const [selectedPriorityOption, setSelectedPriorityOption] =
    React.useState<string>(priorities[3]);

  const handleSelectPriorityOption = (priority: string) => {
    setSelectedPriorityOption(priority);
    handleVisible();
  };

  const handleVisible = () => {
    setVisible((current: boolean) => !current);
  };

  const handleOpenClose = () => {
    setOpen((current: boolean) => !current);
  };

  const handleSubmitTodo = (e: any) => {
    const priority = selectedPriorityOption;
    e.preventDefault();
    addTodo(title, priority);
    handleOpenClose();
  };

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <SubmitItemButton onClick={handleOpenClose}>+</SubmitItemButton>
      <Modal isOpen={open} style={customStyles} overlayClassName="overlay">
        <SubmitForm>
          <SubmitItemInput value={title} onChange={handleChange} />
          <div
            style={{
              border: "1px solid grey",
              width: 80,
              height: 20,
              padding: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
            onClick={handleVisible}
          >
            {selectedPriorityOption || priorities[3]}
          </div>
          {visible && (
            <div
              style={{
                width: 80,
                border: "1px solid grey",
                borderRadius: 10,
                position: "absolute",
                padding: 5,
                marginTop: 105,
                background: "white",
              }}
            >
              {priorities.map((priority: string) => (
                <div onClick={() => handleSelectPriorityOption(priority)}>
                  {priority}
                </div>
              ))}
            </div>
          )}
          <SubmitFormButtonsContainer>
            <AddButton onClick={handleSubmitTodo}>Add task</AddButton>
            <CancelButton onClick={handleOpenClose}>Cancel</CancelButton>
          </SubmitFormButtonsContainer>
        </SubmitForm>
      </Modal>
    </div>
  );
};

export default SubmitItemForm;
