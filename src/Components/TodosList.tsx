import React from "react";
import "../App.css";
import { Container, Grid } from "../styled-components";
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
  return (
    <Container>
      <SubmitItemForm addTodo={addTodo} />
      <Grid>
        {todos && todos.length ? (
          <Container>
            {todos.filter(FILTER_MAP[filter]).map((todo: Todo) => (
              <TodoItem
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
              />
            ))}
          </Container>
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
