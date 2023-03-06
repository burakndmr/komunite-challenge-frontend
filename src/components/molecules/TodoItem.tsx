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
};

export default function TodoItem({ item }: Props) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="">
      {editMode ? (
        <UpdateInput name="" value="" />
      ) : (
        <Paragraph value={item.text} />
      )}
      <div>
        <PrimaryButton />
        <PrimaryButton />
      </div>
    </div>
  );
}
