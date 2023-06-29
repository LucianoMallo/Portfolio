// Actions for the cell selection
export const selectCell = (rowIndex, columnIndex) => ({
  type: 'SELECT_CELL',
  payload: { rowIndex, columnIndex }
})

export const deselectCell = () => ({
  type: 'DESELECT_CELL'
})

// Actions for the timer
export const startTimer = () => ({
  type: 'START_TIMER'
})

export const stopTimer = () => ({
  type: 'STOP_TIMER'
})
