import { useState } from "react";
// Components
import AddTodo from "../molecules/AddTodo";
import Todos from "../molecules/Todos";
import Title from "../atoms/texts/Title";

// Types
type Props = {};

export default function TodoApp({}: Props) {
  interface Todo {
    id?: number;
    text: string;
    done: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="flex flex-col gap-6">
      <Title value="Todo App" />
      <AddTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}
