import { useDispatch, useSelector } from 'react-redux'
import { selectCell, deselectCell, startTimer } from '../../../actions/actions'
import { CellContainer } from './styles.js'

export function Cell ({ number = ' ', rowIndex, columnIndex }) {
  const dispatch = useDispatch()
  const selectedCell = useSelector((state) => state.cells.selectedCell)

  if (number === 0) number = ' '

  const handleClick = () => {
    if (selectedCell && selectedCell.rowIndex === rowIndex && selectedCell.columnIndex === columnIndex) {
      // Do nothing if the cell is already selected
    } else if (selectedCell) {
      dispatch(deselectCell())
      dispatch(selectCell(rowIndex, columnIndex))
      dispatch(startTimer())
    } else {
      dispatch(selectCell(rowIndex, columnIndex))
      dispatch(startTimer())
    }
  }
  const getCellClassName = () => {
    const isClicked = selectedCell && selectedCell.rowIndex === rowIndex && selectedCell.columnIndex === columnIndex
    const isSameRow = selectedCell && selectedCell.rowIndex === rowIndex
    const isSameColumn = selectedCell && selectedCell.columnIndex === columnIndex

    if (isClicked) {
      return 'clicked'
    } else if (isSameRow || isSameColumn) {
      return 'same-row-column'
    } else {
      return ''
    }
  }
  return (
    <CellContainer
      className={getCellClassName() + ' cell'}
      onClick={handleClick}
    >
      {number}
    </CellContainer>
  )
}
