import { useState } from 'react'
import './App.css'
import Divider from './Divider/Divider'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoList from './List/TodoList'
import TodoListArea from './List/TodoListArea'
import TodoListTools from './Tools/TodoListTools'

export interface TodoType {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<TodoType[]>([])

  const handleTextChange = (text: string) => {
    setText(text)
  }

  const handleSubmit = () => {
    if (!text) {
      return
    }
    const newTodos = todos.concat({ id: Date.now(), text: text, isChecked: false })
    // setTodos([...todos, { id: Date.now(), text: text, isChecked: true }])
    setTodos(newTodos)
    setText('')
    console.log('submit')
  }

  const handleToggle = (id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        }
      }
      return todo
    })

    setTodos(newTodos)
    // setTodos(
    //   todos.map(todo => {
    //     return todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    //   }),
    // )

    console.log('toggle', id)
  }

  const handleRemove = (id: number) => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id
      }),
    )
    console.log('remove', id)
  }

  const isTodoAllChecked = () => {
    return todos.every(todo => todo.isChecked)
  }

  const handleToggleAllClick = () => {
    const isAllChecked = todos.every(todo => todo.isChecked)

    setTodos(
      todos.map(todo => {
        return { ...todo, isChecked: !isAllChecked }
      }),
    )
  }

  const handleRemoveAllClick = () => {
    setTodos([])
    console.log('removeAll')
  }

  return (
    <main className="App">
      <TodoHeader count={todos.filter(todo => todo.isChecked === false).length} />
      <TodoInput text={text} onTextChange={handleTextChange} onSubmit={handleSubmit} />
      <TodoListArea todoCount={todos.length}>
        <TodoListTools
          isAllChecked={isTodoAllChecked()}
          onToggleAllClick={handleToggleAllClick}
          onRemoveAllClick={handleRemoveAllClick}
        />
        <Divider />
        <TodoList todos={todos} onToggleClick={handleToggle} onRemoveClick={handleRemove} />
      </TodoListArea>
    </main>
  )
}

export default App
