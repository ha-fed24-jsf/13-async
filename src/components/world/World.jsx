// Vi använder ett API som svarar med data om länder
// Datan är en lista med objekt. Vilka egenskaper har objekten?
import { useState } from 'react'
import './World.css'
import Country from './Country.jsx'
import { getCountryData } from '../../data/api.js'

const World = () => {
	const [data, setData] = useState(null)
	const [errorMessage, setErrorMessage] = useState('')

	const getData = () => getCountryData(setData, setErrorMessage)

	return (
		<div className="world">
			<h2> Landsinformation </h2>
			{data ? (
				<ul>
					{data.map(country => (
						<Country key={country.name} info={country} />
					))}
				</ul>
			) : (
				<>
				<p> Det finns ingen data! </p>
				<button onClick={getData}> Hämta data från API </button>
				</>
			)}
			<button disabled={!data} onClick={() => setData(null)}> Släng datan </button>

			{/* && använder tekniken "short circuiting" */}
			{errorMessage && (<p> {errorMessage} </p>)}
		</div>
	)
}
export default World
