import React, { createContext, useContext, useReducer } from 'react'
import { todoInputReducer } from './todoInputReducer'
import { todoReducer } from './todoReducer'
import { loadTodos } from './todoStorage'
export interface TodoType {
  id: number
  text: string
  isChecked: boolean
}

interface TodoStateType {
  todos: TodoType[]
}

type TodoActionType =
  | { type: 'add'; payload: { text: string } }
  | { type: 'remove'; payload: { id: number } }
  | { type: 'checked'; payload: { id: number } }
  | { type: 'allChecked'; payload: boolean }
  | { type: 'allRemove' }

interface TodoInputStateType {
  text: string
}

// change, clear
type TodoInputActionType =
  | {
      type: 'change'
      payload: string
    }
  | { type: 'clear' }

interface TodoProviderProps {
  children: React.ReactNode
}

const TodoStateContext = createContext<TodoStateType | null>(null)
const TodoDispatchContext = createContext<React.Dispatch<TodoActionType> | null>(null)
const InputTodoContext = createContext<TodoInputStateType | null>(null)
const InputTodoDispatchContext = createContext<React.Dispatch<TodoInputActionType> | null>(null)

function TodoProvider(props: TodoProviderProps) {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: '' })
  const [todoState, todosDispatch] = useReducer(todoReducer, { todos: loadTodos() })
  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todosDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export default TodoProvider

export const useTodoState = () => {
  const value = useContext(TodoStateContext)

  if (!value) {
    throw new Error('cannot find useTodoState')
  }

  return value
}

export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext)

  if (!value) {
    throw new Error('cannot find useTodoDispatch')
  }

  return value
}

export const useInputTodoState = () => {
  const value = useContext(InputTodoContext)

  if (!value) {
    throw new Error('cannot find useInputTodoState')
  }

  return value
}

export const useInputTodoDispatch = () => {
  const value = useContext(InputTodoDispatchContext)

  if (!value) {
    throw new Error('cannot find useInputTodoDispatch')
  }

  return value
}
