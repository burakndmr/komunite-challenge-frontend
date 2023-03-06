import { useState } from "react";

// Components
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import UpdateInput from "../atoms/inputs/UpdateInput";
import Paragraph from "../atoms/texts/Paragraph";

// Types
interface Todo {
  id?: number;
  text: string;
  done: boolean;
}
type Props = {
  item: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoItem({ item, setTodos }: Props) {
  const [editMode, setEditMode] = useState(false);

  // INPUT HANDLER

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === item.id) {
          return {
            ...todo,
            text: e.target.value,
          };
        }
        return todo;
      })
    );
  };

  // EDIT AND DELETE FUNCTINOS
  const editItem = () => {
    setEditMode((prev) => !prev);
  };

  const deleteItem = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== item.id));
  };

  return (
    <div className="">
      {editMode ? (
        <UpdateInput action={inputHandler} name="" value={item.text} />
      ) : (
        <Paragraph value={item.text} />
      )}
      <div>
        <PrimaryButton action={editItem} value="Update" />
        <PrimaryButton action={deleteItem} value="Delete" />
      </div>
    </div>
  );
}
