import styled, { keyframes } from 'styled-components'
export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: relative;
`

export const BoardWrapper = styled.div`
  &.column {
    display: flex;
    flex-direction: column;
  }

  &.board-separator-row {
    border-right: 2px solid black;
  }

  .board-separator-column {
    border-bottom: 2px solid black;
  }
`

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

export const WinPanel = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: green;
  border: 2px solid #000;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-in-out, ${scaleIn} 0.5s ease-in-out;
  z-index: 1;
`
