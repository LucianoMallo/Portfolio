export const selectCell = (rowIndex, columnIndex) => ({
  type: 'SELECT_CELL',
  payload: { rowIndex, columnIndex }
})

export const deselectCell = () => ({
  type: 'DESELECT_CELL'
})
