// Components
import {  useState } from "react";
import AddInput from "../atoms/inputs/AddInput";
import SubmitInput from "../atoms/inputs/SubmitInput";

// Types
interface Todo {
  id?: number;
  text: string;
  done: boolean;
}

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function AddTodo({ setTodos }: Props) {

  const [todo, setTodo] = useState<Todo>({
    text: "",
    done: false,
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(todo);
    setTodo({
      ...todo,
      text: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { ...todo, id: prevTodos.length + 1 },
    ]);
    e.preventDefault();
    setTodo({
      text: "",
      done: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <AddInput action={inputHandler} value={todo.text} name="addTodo" />
      <SubmitInput name="submit" value="Add Todo" />
    </form>
  );
}
