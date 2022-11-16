import { useTodoState } from '../Todo/TodoProvider'

interface TodoListProps {
  children: React.ReactNode
  // todoCount: number
}

function TodoListArea(props: TodoListProps) {
  const todoState = useTodoState()

  if (todoState.todos.length < 1) {
    return null
  }
  return <>{props.children}</>
}

export default TodoListArea
