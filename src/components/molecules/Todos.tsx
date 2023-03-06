// Components
import TodoItem from "../molecules/TodoItem";

import Paragraph from "../atoms/texts/Paragraph";

// Types

interface Todo {
  id?: number;
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
        todos.map((todo: Todo, i) => <TodoItem key={i} item={todo} />)
      ) : (
        <Paragraph value="Please add todo item" />
      )}
    </div>
  );
}
