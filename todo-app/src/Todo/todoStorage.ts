import { TodoType } from './todoReducer'

export const saveTodos = (todos: TodoType[]) => {
  localStorage.setItem('todo', JSON.stringify(todos))
}

export const loadTodos = () => {
  const todoJson = localStorage.getItem('todo')
  if (!todoJson) return []

  try {
    return JSON.parse(todoJson)
  } catch (e) {
    console.error(e)
    return []
  }
}
