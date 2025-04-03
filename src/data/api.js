async function getCountryData(setData, setErrorMessage) {
	const url = 'https://forverkliga.se/JavaScript/api/simple.php?world'
	// Kom ihåg att vänta med AWAIT
	try {
		const response = await fetch(url)
		const data = await response.json()
		// Under utvecklingen är det användbart att skriva ut det vi får från API - då kan vi se vad objekten innehåller
		console.log('World: data: ', data)
		setData(data)

	} catch(error) {
		// Vi kan inte göra något för att rädda situationen - be användaren försöka igen senare
		setErrorMessage('Något gick fel! Försök igen senare...')
	}
}

async function getJoke(setData, setErrorMessage) {
	const url = 'https://api.chucknorris.io/jokes/random'
	try {
		const response = await fetch(url)
		const data = await response.json()
		console.log('api.getJoke: ', data)

		// Eftersom vi bara är intresserade av "value" i objektet:
		setData(data.value)

	} catch(error) {
		setErrorMessage('Något gick fel! Försök igen senare...')
	}
}


export { getCountryData, getJoke }
