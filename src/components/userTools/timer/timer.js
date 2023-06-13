import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { stopTimer, startTimer } from '../../../actions/actions'

function Timer () {
  const [seconds, setSeconds] = useState(0)
  const dispatch = useDispatch()
  const isRunning = useSelector((state) => state.timer.isRunning)
  useEffect(() => {
    let timer = null

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1)
      }, 1000)
    }

    return () => {
      clearInterval(timer)
    }
  }, [isRunning])

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }

  const handleOnclick = () => {
    return () => {
      isRunning
        ? dispatch(stopTimer())
        : dispatch(startTimer())
    }
  }

  return (
    <div>
      <h1>Timer</h1>
      <p>{formatTime(seconds)}</p>
      {isRunning
        ? <button onClick={handleOnclick()}>Pause</button>
        : <button onClick={handleOnclick()}>Start</button>}
    </div>
  )
}

export default Timer
