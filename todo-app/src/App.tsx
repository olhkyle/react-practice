import { useState, useReducer } from 'react'
import './App.css'
import Divider from './Divider/Divider'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoList from './List/TodoList'
import TodoListArea from './List/TodoListArea'
import TodoListTools from './Tools/TodoListTools'
import { todoInputReducer } from './Todo/todoInputReducer'
import { todoReducer } from './Todo/todoReducer'

function App() {
  // const [text, setText] = useState('')
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: '' })
  const [todoState, todosDispatch] = useReducer(todoReducer, { todos: [] })
  // const [todos, setTodos] = useState<TodoType[]>([])

  const handleTextChange = (text: string) => {
    inputDispatch({ type: 'change', payload: text })
  }

  const handleSubmit = () => {
    if (!inputState.text) {
      return
    }
    // const newTodos = todos.concat({ id: Date.now(), text: inputState.text, isChecked: false })
    // setTodos([...todos, { id: Date.now(), text: text, isChecked: true }])
    // setTodos(newTodos)
    todosDispatch({
      type: 'add',
      payload: {
        text: inputState.text,
      },
    })
    inputDispatch({ type: 'clear' })
    console.log('submit')
  }

  // 할일 완료 시 체크
  const handleToggle = (id: number) => {
    // const newTodos = todos.map(todo => {
    //   if (todo.id === id) {
    //     return {
    //       ...todo,
    //       isChecked: !todo.isChecked,
    //     }
    //   }
    //   return todo
    // })

    // setTodos(newTodos)
    // setTodos(
    //   todos.map(todo => {
    //     return todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    //   }),
    // )

    todosDispatch({
      type: 'checked',
      payload: {
        id: id,
      },
    })
    console.log('toggle', id)
  }

  const handleRemove = (id: number) => {
    // setTodos(
    //   todos.filter(todo => {
    //     return todo.id !== id
    //   }),
    // )
    todosDispatch({
      type: 'remove',
      payload: {
        id: id,
      },
    })
    console.log('remove', id)
  }

  const isTodoAllChecked = () => {
    return todoState.todos.every(todo => todo.isChecked)
  }

  const handleToggleAllClick = () => {
    const isAllChecked = todoState.todos.every(todo => todo.isChecked)

    // setTodos(
    //   todos.map(todo => {
    //     return { ...todo, isChecked: !isAllChecked }
    //   }),
    // )
    todosDispatch({
      type: 'allChecked',
      payload: isAllChecked,
    })
  }

  const handleRemoveAllClick = () => {
    // setTodos([])
    todosDispatch({
      type: 'allRemove',
    })
    console.log('removeAll')
  }

  return (
    <main className="App">
      <TodoHeader count={todoState.todos.filter(todo => todo.isChecked === false).length} />
      <TodoInput text={inputState.text} onTextChange={handleTextChange} onSubmit={handleSubmit} />
      <TodoListArea todoCount={todoState.todos.length}>
        <TodoListTools
          isAllChecked={isTodoAllChecked()}
          onToggleAllClick={handleToggleAllClick}
          onRemoveAllClick={handleRemoveAllClick}
        />
        <Divider />
        <TodoList
          todos={todoState.todos}
          onToggleClick={handleToggle}
          onRemoveClick={handleRemove}
        />
      </TodoListArea>
    </main>
  )
}

export default App
