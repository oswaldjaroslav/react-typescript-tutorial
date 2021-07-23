interface Todo {
  title: string;
  id: number;
  complete?: boolean;
  priority?: string;
}

type CompleteTodo = (selectedTodo: Todo) => void;
type AddTodo = (title: string, priority: string) => void;
type RemoveTodo = (id: number) => void;
type EditTodo = (todo: Todo) => void;
type SelectPriorityOption = (priority: Priority) => void;
