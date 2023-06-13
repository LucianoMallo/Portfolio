// Acciones para la selección de celdas
export const selectCell = (rowIndex, columnIndex) => ({
  type: 'SELECT_CELL',
  payload: { rowIndex, columnIndex }
})

export const deselectCell = () => ({
  type: 'DESELECT_CELL'
})

// Acciones para el temporizador
export const startTimer = () => ({
  type: 'START_TIMER'
})

export const stopTimer = () => ({
  type: 'STOP_TIMER'
})
