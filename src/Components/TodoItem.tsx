import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import {
  Cell,
  Container,
  EditInput,
  TodoItemButtonsContainer,
  TodoItemTitleContainer,
} from "../styled-components";

interface TodoIProps {
  todo: Todo;
  completeTodo: CompleteTodo;
  removeTodo: RemoveTodo;
  editTodo: EditTodo;
}

const TodoItem: React.FC<TodoIProps> = ({
  todo,
  completeTodo,
  removeTodo,
  editTodo,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState<boolean>(false);
  const [toggleTodo, setToggleTodo] = React.useState<boolean>(false);
  const [editTitle, setEditTitle] = React.useState<string>(todo.title);

  const handleToggleCheckBox = () => {
    setToggleCheckBox((current: boolean) => !current);
  };

  const handleToggleTodo = () => {
    setToggleTodo((current: boolean) => !current);
  };

  const handleChangeEditTitle = (e: any) => {
    setEditTitle(e.target.value);
  };

  const handleCompleteTodo = (todo: Todo) => {
    completeTodo(todo);
    handleToggleCheckBox();
  };

  const handleEditTodo = (todo: Todo) => {
    editTodo({
      ...todo,
      title: editTitle,
      complete: todo.complete,
    });
    handleToggleTodo();
  };

  return (
    <Cell>
      {!todo.complete ? (
        <CheckCircleOutlineRoundedIcon
          style={{
            color:
              todo.priority === "priority4"
                ? "black"
                : todo.priority === "priority3"
                ? "red"
                : todo.priority === "priority2"
                ? "orange"
                : todo.priority === "priority1"
                ? "green"
                : undefined,
          }}
          onClick={() => handleCompleteTodo(todo)}
        />
      ) : (
        <CheckCircleRoundedIcon onClick={() => handleCompleteTodo(todo)} />
      )}
      <TodoItemTitleContainer>
        {!toggleTodo ? (
          <Container
            style={{
              textDecoration: todo.complete ? " 3px  line-through" : undefined,
            }}
          >
            {todo.title}
          </Container>
        ) : (
          <Container>
            <EditInput
              type="text"
              value={editTitle}
              onChange={handleChangeEditTitle}
              style={{
                textDecoration: todo.complete ? "3px line-through" : undefined,
              }}
            />
          </Container>
        )}
      </TodoItemTitleContainer>
      <TodoItemButtonsContainer>
        {toggleTodo ? (
          <CheckCircleRoundedIcon
            className="edit-button"
            onClick={() => handleEditTodo(todo)}
          />
        ) : (
          <EditIcon className="edit-button" onClick={handleToggleTodo} />
        )}
        {toggleTodo ? (
          <CancelRoundedIcon
            className="delete-button"
            onClick={handleToggleTodo}
          />
        ) : (
          <DeleteOutlineIcon
            className="delete-button"
            onClick={() => removeTodo(todo.id)}
          />
        )}
      </TodoItemButtonsContainer>
    </Cell>
  );
};

export default TodoItem;
