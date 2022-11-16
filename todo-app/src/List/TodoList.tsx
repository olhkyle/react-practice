import TodoItem from '../ListItem/TodoItem'
import styles from './TodoList.module.css'
import { TodoType } from '../App'

interface TodoProps {
  todos: TodoType[]
  onToggleClick: (id: number) => void
  onRemoveClick: (id: number) => void
}

function TodoList(props: TodoProps) {
  return (
    <section>
      <ol className={styles.olContainer}>
        {props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isChecked={todo.isChecked}
            onToggleClick={props.onToggleClick}
            onRemoveClick={props.onRemoveClick}
          />
        ))}
      </ol>
    </section>
  )
}

export default TodoList
