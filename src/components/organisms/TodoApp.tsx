// Components
import AddTodo from "../molecules/AddTodo";
import Todos from "../molecules/Todos";

// Types
type Props = {};

export default function TodoApp({}: Props) {
  return (
    <div className="">
      <AddTodo />
      <Todos />
    </div>
  );
}
