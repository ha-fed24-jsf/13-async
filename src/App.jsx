import './App.css'
import Chuck from './components/chuckJokes/Chuck'
import Timer from './components/timer/Timer'
import World from './components/world/World'

function App() {
	return (
		<div className="app">
			<h1> Asynkron kod </h1>

			<Chuck />
			<World />
			<Timer />
		</div>
	)
}

export default App
