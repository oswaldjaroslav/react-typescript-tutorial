import React from "react";
import "../App.css";
import { Container, Grid, MessageTitle } from "../styled-components";
import SubmitItemForm from "./SubmitItemForm";
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
  addTodo,
  removeTodo,
  editTodo,
  FILTER_MAP,
  filter,
}) => {
  const renderTodosList = React.useCallback(() => {
    return todos
      .filter(FILTER_MAP[filter])
      .map((todo: Todo) => (
        <TodoItem
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ));
  }, [FILTER_MAP, filter, todos, completeTodo, removeTodo, editTodo]);

  React.useEffect(() => {
    renderTodosList();
  }, [renderTodosList]);

  return (
    <Container>
      <SubmitItemForm addTodo={addTodo} />
      <Grid>
        {todos && todos.filter(FILTER_MAP[filter]).length ? (
          <Container>{renderTodosList()}</Container>
        ) : (
          <MessageTitle>
            <div>"You have no tasks!"</div>
          </MessageTitle>
        )}
      </Grid>
    </Container>
  );
};

export default TodosList;
