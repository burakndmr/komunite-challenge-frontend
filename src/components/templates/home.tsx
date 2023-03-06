// Components
import TodoApp from "@/components/organisms/TodoApp"

// Types
type Props = {}

export default function HomeTemplate({}:Props) {
  return (
    <div className="mx-auto max-w-2xl mt-14">
      <TodoApp />
    </div>
  )
}