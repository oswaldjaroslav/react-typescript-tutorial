import React from "react";
import Modal from "react-modal";
import "./App.css";
import { priorities } from "./mockData";

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

  const handleVisible = () => {
    setVisible((current: boolean) => !current);
  };

  const handleOpenClose = () => {
    setOpen((current: boolean) => !current);
  };

  const handleSubmitTodo = (e: any) => {
    e.preventDefault();
    addTodo(title);
    handleOpenClose();
  };

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <button onClick={handleOpenClose} className="submit-item-button">
        +
      </button>
      <Modal isOpen={open} style={customStyles} overlayClassName="overlay">
        <form className="submit-form">
          <textarea
            className="submit-item-input"
            value={title}
            onChange={handleChange}
          />
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
          />
          {visible && (
            <div
              style={{
                width: 80,
                border: "1px solid grey",
                borderRadius: 10,
                position: "absolute",
                padding: 5,
                marginTop: 105,
                // background: "white",
                backgroundColor: "red",
              }}
            >
              {priorities.map((priority) => (
                <div key={priority.id}>{priority.title}</div>
              ))}
            </div>
          )}
          <div className="submit-form-buttons-container">
            <button className="add-button" onClick={handleSubmitTodo}>
              Add task
            </button>
            <button className="cancel-button" onClick={handleOpenClose}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SubmitItemForm;
