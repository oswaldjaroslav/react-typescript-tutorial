import React from "react";
import TodosList from "./TodosList";
import { todos } from "./mockData";
import usePersistedState from "./use-persisted.state";
import FilterButton from "./FilterButton";

const initialTodos: Todo[] = todos;

const App = () => {
  const [todos, setTodos] = usePersistedState("todos", initialTodos);
  const [filter, setFilter] = React.useState<string>("All");

  const FILTER_MAP = {
    All: () => true,
    Active: (todo: Todo) => !todo.complete,
    Completed: (todo: Todo) => todo.complete,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => {
    return (
      <FilterButton
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
      />
    );
  });

  console.log(todos);

  const completeTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo: Todo) => {
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

  const addTodo = (title: string, priority: string) => {
    const newTodo: Todo = {
      title,
      id: Date.now(),
      complete: false,
      priority,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    const remove = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(remove);
  };

  const editTodo = (todo: Todo) => {
    setTodos((current: any) =>
      current.map((i: Todo) => {
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
        FILTER_MAP={FILTER_MAP}
        filter={filter}
      />
      <div
        style={{
          marginTop: 10,
          width: 200,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {filterList}
      </div>
    </div>
  );
};

export default App;
