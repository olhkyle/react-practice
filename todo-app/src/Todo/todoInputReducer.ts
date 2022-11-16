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

export function todoInputReducer(state: TodoInputStateType, action: TodoInputActionType) {
  switch (action.type) {
    case 'change':
      return {
        text: action.payload,
      }
    case 'clear':
      return {
        text: '',
      }
  }
}
