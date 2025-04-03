import { useState } from 'react'
import './Timer.css'

const Timer = () => {
	const [time, setTime] = useState(0)
	const [intervalId, setIntervalId] = useState(null)
	const [isRunning, setIsRunning] = useState(false)

	const handleStart = () => {
		const id = setInterval( () => {
			setTime(t => t + 1)
			console.log('Timer: Interval')
		}, 1000 )
		setIntervalId(id)
		setIsRunning(true)
	}
	const handleStop = () => {
		clearInterval(intervalId)
		setIntervalId(null)
		setIsRunning(false)
	}

	return (
		<div className="timer">
			<p>
				<code> {time} sekunder </code>
			</p>

			<p>
				<button disabled={isRunning} onClick={handleStart}> Starta tidtagning </button>
				<button disabled={!isRunning} onClick={handleStop}> Stoppa </button>
			</p>
		</div>
	)
}
export default Timer
