// Components
import TodoItem from "../molecules/TodoItem";

import Paragraph from "../atoms/texts/Paragraph";

// Types

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Props = {
  todos: Todo[];
};

export default function Todos({ todos }: Props) {
  return (
    <div className="">
      {todos.length > 0 ? (
        todos.map((todo: Todo) => <TodoItem />)
      ) : (
        <Paragraph value="Please add todo item" />
      )}
    </div>
  );
}
