import React from "react";
import TodosList from "./TodosList";
import { todos } from "./mockData";

const initialTodos: Todo[] = todos;

const App = () => {
  const [todos, setTodos] = React.useState(initialTodos);
  console.log(todos);

  const completeTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      title,
      id: Date.now(),
      complete: false,
      priority: "",
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    const remove = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(remove);
  };

  const editTodo = (todo: Todo) => {
    setTodos((current) =>
      current.map((i) => {
        if (i.id === todo.id) {
          return todo;
        }
        return i;
      })
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "#e0f2f1",
      }}
    >
      <TodosList
        todos={todos}
        completeTodo={completeTodo}
        addTodo={addTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
