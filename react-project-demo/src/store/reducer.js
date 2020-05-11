import { combineReducers } from 'redux';
import {ADD_TODO, DECREASE_TODO} from './action.js'

let initTodoState = [
  {
    name: 'tom',
    age: 21
  },
  {
    name: 'lucy',
    age: 37
  }
]

function todos(state = initTodoState, action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([action.text])
  default:
    return state
  }
}

function counter(state = 0, action) {
  switch (action.type) {
  case ADD_TODO:
    return state + 1
  case DECREASE_TODO:
    return state - action.num
  default:
    return state
  }
}

export default combineReducers({
  todos, 
  counter
})
