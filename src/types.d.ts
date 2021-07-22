interface Todo {
  title: string;
  id: number;
  complete?: boolean;
  priority?: string;
}

type CompleteTodo = (selectedTodo: Todo) => void;
type AddTodo = (title: string) => void;
type RemoveTodo = (id: number) => void;
type EditTodo = (todo: Todo) => void;
