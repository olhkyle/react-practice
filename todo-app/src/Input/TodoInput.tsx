import React from 'react'
import { RiChatNewLine } from 'react-icons/ri'
import { useInputTodoDispatch, useInputTodoState, useTodoDispatch } from '../Todo/TodoProvider'
import styles from './TodoInput.module.css'

// interface TodoInputProps {
//   text: string
//   onTextChange: (text: string) => void
//   onSubmit: () => void
// }

// const handleTextChange = (text: string) => {
//   inputDispatch({ type: 'change', payload: text })
// }

// const handleSubmit = () => {
//   if (!inputState.text) {
//     return
//   }
//   // const newTodos = todos.concat({ id: Date.now(), text: inputState.text, isChecked: false })
//   // setTodos([...todos, { id: Date.now(), text: text, isChecked: true }])
//   // setTodos(newTodos)
//   todosDispatch({
//     type: 'add',
//     payload: {
//       text: inputState.text,
//     },
//   })
//   inputDispatch({ type: 'clear' })
//   console.log('submit')
// }

function TodoInput() {
  const todoDispatch = useTodoDispatch()
  const inputDispatch = useInputTodoDispatch()
  const inputState = useInputTodoState()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: 'change',
      payload: e.target.value,
    })
    // onTextChange(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputState.text) {
      return
    }
    todoDispatch({
      type: 'add',
      payload: {
        text: inputState.text,
      },
    })
    inputDispatch({ type: 'clear' })
    console.log('submit')
    // onSubmit()
  }

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          value={inputState.text}
          onChange={handleInputChange}
          className={styles.input}
          placeholder={'해야할 일 추가'}
        />
        <button className={styles.enter}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  )
}

export default TodoInput
