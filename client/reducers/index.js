
import { router5Reducer } from 'redux-router5'
import { combineReducers } from 'redux'
import todos from './todos'

export default combineReducers({
  router: router5Reducer,
  todos
})
