
import { createReducer } from 'redux-act'
import Immutable from 'seamless-immutable'
import * as Actions from '../actions/todos'

const initialState = Immutable([
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
])

export default createReducer({
  [Actions.addTodo]: (state, text) => Immutable([
    {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: text
    },
    ...state
  ]),

  [Actions.deleteTodo]: (state, id) => state.filter(todo =>
    todo.id !== id
  ),

  [Actions.editTodo]: (state, { id, text }) => state.map(todo =>
    todo.id === id
      ? todo.set('text', text)
      : todo
  ),

  [Actions.completeTodo]: (state, id) => state.map(todo =>
    todo.id === id
      ? todo.set('completed', !todo.completed)
      : todo
  ),

  [Actions.completeAll]: (state) => {
    const areAllMarked = state.every(todo => todo.completed)
    return state.map(todo => todo.set('completed', !areAllMarked))
  },

  [Actions.clearCompleted]: (state) => state.filter(todo => todo.completed === false)
}, initialState)
