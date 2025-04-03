import './App.css'
import Timer from './components/timer/Timer'
import World from './components/world/World'

function App() {
	return (
		<div className="app">
			<h1> Asynkron kod </h1>

			<World />
			<Timer />
		</div>
	)
}

export default App
