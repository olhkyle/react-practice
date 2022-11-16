import styles from './TodoListTools.module.css'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { CgRadioCheck } from 'react-icons/cg'
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider'

// interface TodoListToolsProps {
//   isAllChecked: boolean
//   onToggleAllClick: () => void
//   onRemoveAllClick: () => void
// }

// const handleToggleAllClick = () => {
//   const isAllChecked = todoState.todos.every(todo => todo.isChecked)

//   // setTodos(
//   //   todos.map(todo => {
//   //     return { ...todo, isChecked: !isAllChecked }
//   //   }),
//   // )
//   todosDispatch({
//     type: 'allChecked',
//     payload: isAllChecked,
//   })
// }

// const handleRemoveAllClick = () => {
//   // setTodos([])
//   todosDispatch({
//     type: 'allRemove',
//   })
//   console.log('removeAll')
// }

function TodoListTools() {
  const todoState = useTodoState()
  const todoDispatch = useTodoDispatch()

  const isTodoAllChecked = () => {
    return todoState.todos.every(todo => todo.isChecked)
  }

  const handleToggleAllClick = () => {
    todoDispatch({
      type: 'allChecked',
      payload: isTodoAllChecked(),
    })
  }
  const handleRemoveAllClick = () => {
    todoDispatch({
      type: 'allRemove',
    })
  }

  return (
    <section className={styles.container}>
      <button className={styles.button} onClick={handleToggleAllClick}>
        {isTodoAllChecked() ? (
          <>
            <CgRadioCheck className={styles.checkAllIcon} /> 전체 해제
          </>
        ) : (
          <>
            <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} />
            전체 완료
          </>
        )}
      </button>
      <button
        className={[styles.button, styles.removeAllButton].join(' ')}
        onClick={handleRemoveAllClick}
      >
        <MdDelete className={styles.removeAllIcon} />
        전체 삭제
      </button>
    </section>
  )
}

export default TodoListTools
