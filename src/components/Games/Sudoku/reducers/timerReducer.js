const initialState = {
  isRunning: false,
  seconds: 0
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        isRunning: true
      }
    case 'STOP_TIMER':
      return {
        ...state,
        isRunning: false
      }
    default:
      return state
  }
}

export default timerReducer
