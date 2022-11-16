import styles from './TodoItem.module.css'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { useTodoDispatch } from '../Todo/TodoProvider'

interface TodoItemProps {
  id: number
  text: string
  isChecked: boolean
}

// const handleToggle = (id: number) => {
//   // const newTodos = todos.map(todo => {
//   //   if (todo.id === id) {
//   //     return {
//   //       ...todo,
//   //       isChecked: !todo.isChecked,
//   //     }
//   //   }
//   //   return todo
//   // })

//   // setTodos(newTodos)
//   // setTodos(
//   //   todos.map(todo => {
//   //     return todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
//   //   }),
//   // )

//   todosDispatch({
//     type: 'checked',
//     payload: {
//       id: id,
//     },
//   })
//   console.log('toggle', id)
// }

// const handleRemove = (id: number) => {
//   // setTodos(
//   //   todos.filter(todo => {
//   //     return todo.id !== id
//   //   }),
//   // )
//   todosDispatch({
//     type: 'remove',
//     payload: {
//       id: id,
//     },
//   })
//   console.log('remove', id)
// }

function TodoItem(props: TodoItemProps) {
  const todoDispatch = useTodoDispatch()
  const handleToggleClick = () => {
    // props.onToggleClick(props.id)
    todoDispatch({
      type: 'checked',
      payload: {
        id: props.id,
      },
    })
  }

  const handleRemoveClick = () => {
    // props.onRemoveClick(props.id)
    todoDispatch({
      type: 'remove',
      payload: {
        id: props.id,
      },
    })
  }

  return (
    <li className={styles.liElement}>
      <BsCheckCircle
        className={[
          styles.checkIcon,
          props.isChecked ? styles.checkedCircleIcon : styles.unCheckedCircleIcon,
        ].join(' ')}
        onClick={handleToggleClick}
      />
      <span className={props.isChecked ? styles.linethrough : ''}>{props.text}</span>
      <IoIosRemoveCircleOutline className={styles.removeIcon} onClick={handleRemoveClick} />
    </li>
  )
}

export default TodoItem
