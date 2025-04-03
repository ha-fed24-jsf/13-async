import { useEffect, useState } from 'react'
import './Chuck.css'
import { getJoke } from '../../data/api'

const Chuck = () => {
	// Innan vi fått något från API har vi inget att visa upp
	const [jokeText, setJokeText] = useState(null)
	const [error, setError] = useState('')

	// Obs, parametern till useEffect får inte vara async
	// useEffect( setup, dependencies? )
	// Ingen dependency-lista -> alla state-ändringar triggar useEffect
	// Tom dependency-lista -> useEffect triggas bara 1 gång
	useEffect(() => {
		getJoke(setJokeText, setError)
	}, [])

	const handleJoke = () => getJoke(setJokeText, setError)

	return (
		<div className="chuck">
			{jokeText ? (
				<p> {jokeText} </p>
			): (
				<p> No jokes yet... </p>
			)}
			<button onClick={handleJoke}> Get fresh joke </button>
		</div>
	)
}
export default Chuck
