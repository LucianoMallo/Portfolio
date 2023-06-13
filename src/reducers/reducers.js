import { combineReducers } from 'redux'
import cellReducer from './cellReducer'
import timerReducer from './timerReducer'

const rootReducer = combineReducers({
  cells: cellReducer,
  timer: timerReducer
})

export default rootReducer
