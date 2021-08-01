interface Todo {
  title: string;
  id: number;
  complete?: boolean;
  priority?: string;
}

interface Theme {
  title: string;
  buttonTheme: string;
  boxTheme: string;
  appTheme: string;
  itemTheme: string;
  id: number;
}

type CompleteTodo = (selectedTodo: Todo) => void;
type AddTodo = (title: string, priority: string) => void;
type RemoveTodo = (id: number) => void;
type EditTodo = (todo: Todo) => void;
type SelectPriorityOption = (priority: Priority) => void;
type SetFilter = (item: string) => void;
type SelectPriorityOption = (priority: string) => void;
type FilterMap = All | Active | Completed;
