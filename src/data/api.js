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

export { getCountryData }
