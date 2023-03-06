import { useState } from "react";

// Components
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import UpdateInput from "../atoms/inputs/UpdateInput";
import Paragraph from "../atoms/texts/Paragraph";

// Types
type Props = {};

export default function TodoItem({}: Props) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="">
      {editMode ? <UpdateInput name="" value="" /> : <Paragraph value="" />}
      <div>
        <PrimaryButton />
        <PrimaryButton />
      </div>
    </div>
  );
}
