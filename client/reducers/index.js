
import { router5Reducer } from 'redux-router5'
// import {reducer as formReducer} from 'redux-form'
import { combineReducers } from 'redux'
import todos from './todos'

export default combineReducers({
  // form: formReducer,
  router: router5Reducer,
  todos
})
