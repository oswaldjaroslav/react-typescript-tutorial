import React from "react";
import TodosList from "./Components/TodosList";
import { themes, todos } from "./shared/mockData";
import usePersistedState from "./use-persisted.state";
import FilterButton from "./Components/FilterButton";
import {
  AppContainer,
  FilterListContainer,
  Footer,
  Header,
} from "./styled-components";
import { ThemeProvider } from "styled-components";
import ThemePicker from "./Components/ThemePicker";
import SubmitItemForm from "./Components/SubmitItemForm";

const initialTodos: Todo[] = todos;

const App = () => {
  const [todos, setTodos] = usePersistedState("todos", initialTodos);
  const [filter, setFilter] = React.useState<string>("Active");
  const [theme, setTheme] = usePersistedState("themes", themes["blueTheme"]);

  const FILTER_MAP = {
    All: () => true,
    Active: (todo: Todo) => !todo.complete,
    Completed: (todo: Todo) => todo.complete,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const renderFilterList = React.useCallback(() => {
    return FILTER_NAMES.map((item: string) => {
      return (
        <FilterButton
          key={item}
          item={item}
          isPressed={item === filter}
          setFilter={setFilter}
        />
      );
    });
  }, [FILTER_NAMES, filter]);

  React.useEffect(() => {
    renderFilterList();
  }, [renderFilterList]);

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
      current.map((item: Todo) => {
        if (item.id === todo.id) {
          return todo;
        }
        return item;
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header>
          <SubmitItemForm addTodo={addTodo} theme={theme} />
        </Header>
        <TodosList
          todos={todos}
          completeTodo={completeTodo}
          addTodo={addTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          FILTER_MAP={FILTER_MAP}
          filter={filter}
        />
        <Footer>
          <FilterListContainer>{renderFilterList()}</FilterListContainer>
          <ThemePicker theme={theme} setTheme={setTheme} />
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
