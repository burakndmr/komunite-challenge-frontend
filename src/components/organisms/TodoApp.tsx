// Components
import { useState } from "react";
import AddTodo from "../molecules/AddTodo";
import Todos from "../molecules/Todos";

// Types
type Props = {};

export default function TodoApp({}: Props) {

  interface Todo {
    id: number;
    text: string;
    done: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div className="">
      <AddTodo />
      <Todos todos={todos} />
    </div>
  );
}
