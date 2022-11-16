import { useState, useReducer } from 'react'
import './App.css'
import Divider from './Divider/Divider'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoList from './List/TodoList'
import TodoListArea from './List/TodoListArea'
import TodoListTools from './Tools/TodoListTools'
// import { todoInputReducer } from './Todo/todoInputReducer'
// import { todoReducer } from './Todo/todoReducer'
import TodoProvider from './Todo/TodoProvider'

function App() {
  // const [text, setText] = useState('')
  // const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: '' })
  // const [todoState, todosDispatch] = useReducer(todoReducer, { todos: [] })
  // const [todos, setTodos] = useState<TodoType[]>([])

  // 할일 완료 시 체크

  return (
    <main className="App">
      <TodoProvider>
        <TodoHeader />
        <TodoInput />
        <TodoListArea>
          <TodoListTools />
          <Divider />
          <TodoList />
        </TodoListArea>
      </TodoProvider>
    </main>
  )
}

export default App
