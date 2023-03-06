// Components
import AddInput from "../atoms/inputs/AddInput";
import SubmitInput from "../atoms/inputs/SubmitInput";

// Types
type Props = {};

export default function AddTodo({}: Props) {
  return (
    <form className="">
      <AddInput value="Add Todo" name="addTodo" />
      <SubmitInput name="submit" value="" />
    </form>
  );
}
