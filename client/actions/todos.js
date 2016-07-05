
import { createAction } from 'redux-act'

export const addTodo = createAction('add todo')
export const deleteTodo = createAction('delete todo')
export const editTodo = createAction('edit todo', (id, text) => ({ id, text }))
export const completeTodo = createAction('complete todo')
export const completeAll = createAction('complete all')
export const clearCompleted = createAction('clear completed')
