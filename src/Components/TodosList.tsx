import React from "react";
import "../App.css";
import {
  Container,
  MessageTitle,
  TodosListContainer,
} from "../styled-components";
import TodoItem from "./TodoItem";

interface IProps {
  todos: Todo[];
  completeTodo: CompleteTodo;
  addTodo: AddTodo;
  removeTodo: RemoveTodo;
  editTodo: EditTodo;
  FILTER_MAP: any;
  filter: any;
}

const TodosList: React.FC<IProps> = ({
  todos,
  completeTodo,
  removeTodo,
  editTodo,
  FILTER_MAP,
  filter,
}) => {
  const renderTodosList = React.useCallback(() => {
    return (
      <div>
        {todos.filter(FILTER_MAP[filter]).map((todo: Todo) => (
          <TodoItem
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    );
  }, [FILTER_MAP, filter, todos, completeTodo, removeTodo, editTodo]);

  React.useEffect(() => {
    renderTodosList();
  }, [renderTodosList]);

  return (
    <Container>
      {todos && todos.filter(FILTER_MAP[filter]).length ? (
        <TodosListContainer>{renderTodosList()}</TodosListContainer>
      ) : (
        <MessageTitle>
          <div>"You have no tasks!"</div>
        </MessageTitle>
      )}
    </Container>
  );
};

export default TodosList;
