// Components
import { useState } from "react";
import AddTodo from "../molecules/AddTodo";
import Todos from "../molecules/Todos";

// Types
type Props = {};

export default function TodoApp({}: Props) {
  interface Todo {
    id?: number;
    text: string;
    done: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([]);

  console.log("todoApp.tsx", todos);

  return (
    <div className="">
      <AddTodo setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}
