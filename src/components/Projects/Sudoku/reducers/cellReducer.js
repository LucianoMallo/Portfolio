const initialState = {
  selectedCell: null
}

const cellReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CELL':
      return {
        ...state,
        selectedCell: action.payload
      }
    case 'DESELECT_CELL':
      return {
        ...state,
        selectedCell: null
      }
    default:
      return state
  }
}

export default cellReducer
