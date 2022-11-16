import styles from './TodoHeader.module.css'

interface TodoHeaderProps {
  count: number
}
function TodoHeader({ count }: TodoHeaderProps) {
  return (
    <header>
      <h1 className={styles.headerTitle}>
        <mark className={styles.todoCount}>{count}</mark>
        개의 할 일
      </h1>
    </header>
  )
}

export default TodoHeader
