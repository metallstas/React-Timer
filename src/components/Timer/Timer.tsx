import { useState } from 'react'
import cls from './Timer.module.css'

export const Timer = () => {
  const [time, setTime] = useState(0)
  const [idInterval, setIdInterval] = useState<NodeJS.Timeout>()

  const timerStartHandler = () => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
    setIdInterval(interval)
  }

  const timerStopHandler = () => {
    if (idInterval) {
      clearInterval(idInterval)
    }
  }

  const timerResetHandler = () => {
    setTime(0)
    timerStopHandler()
  }

  return (
    <div>
      <p className={cls.time}>{time}</p>
      <div>
        <button onClick={timerStartHandler}>Start</button>
        <button onClick={timerStopHandler}>Stop</button>
        <button onClick={timerResetHandler}>Reset</button>
      </div>
    </div>
  )
}
