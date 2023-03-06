import { useState, createRef, useEffect } from "react";

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

  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  // EDIT AND DELETE FUNCTINOS
  const editItem = () => {
    setEditMode((prev) => !prev);
  };

  const deleteItem = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== item.id));
  };

  return (
    <div className="w-full flex justify-between items-center border-2 border-gray-300 rounded-md p-2">
      {editMode ? (
        <UpdateInput
          ref={inputRef}
          action={inputHandler}
          name=""
          value={item.text}
        />
      ) : (
        <Paragraph value={item.text} />
      )}
      <div className="flex gap-2">
        <PrimaryButton variant="emerald" action={editItem} value="Update" />
        <PrimaryButton variant="red" action={deleteItem} value="Delete" />
      </div>
    </div>
  );
}
