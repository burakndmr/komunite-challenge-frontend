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
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function Todos({ todos, setTodos }: Props) {
  return (
    <div className="flex flex-col  gap-3 items-center">
      {todos.length > 0 ? (
        todos.map((todo: Todo, i) => (
          <TodoItem key={i} item={todo} setTodos={setTodos} />
        ))
      ) : (
        <Paragraph value="Please add todo item" status="undone" />
      )}
    </div>
  );
}
