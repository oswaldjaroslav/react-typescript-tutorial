import React from "react";
import "../App.css";
import { Container, Grid } from "../styled-components";
import SubmitItemForm from "./SubmitItemForm";
import ThemePicker from "./ThemePicker";
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
        {todos && todos.length ? (
          <Container>{renderTodosList()}</Container>
        ) : (
          <div
            style={{
              fontSize: 20,
              textAlign: "center",
              marginTop: 60,
              fontWeight: 600,
            }}
          >
            <div>"You have no tasks, yet!"</div>
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default TodosList;
