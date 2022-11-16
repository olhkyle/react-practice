import React from 'react'
import { RiChatNewLine } from 'react-icons/ri'
import styles from './TodoInput.module.css'

interface TodoInputProps {
  text: string
  onTextChange: (text: string) => void
  onSubmit: () => void
}

function TodoInput({ text, onTextChange, onSubmit }: TodoInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          value={text}
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
