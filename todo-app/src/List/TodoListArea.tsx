interface TodoListProps {
  children: React.ReactNode
  todoCount: number
}

function TodoListArea(props: TodoListProps) {
  if (props.todoCount < 1) {
    return null
  }
  return <>{props.children}</>
}

export default TodoListArea
