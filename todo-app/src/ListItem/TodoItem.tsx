import styles from './TodoItem.module.css'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'

interface TodoItemProps {
  id: number
  text: string
  isChecked: boolean
  onToggleClick: (id: number) => void
  onRemoveClick: (id: number) => void
}

function TodoItem(props: TodoItemProps) {
  const handleToggleClick = () => {
    props.onToggleClick(props.id)
  }

  const handleRemoveClick = () => {
    props.onRemoveClick(props.id)
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
