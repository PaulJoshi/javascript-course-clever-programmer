/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef10bb087cmshe63dd0471995c5ep1408ddjsn1f2175e8ef64',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kochi'
 */
getWeatherData = async (city) => {
	const URL = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?";
	//HINT: Use template literals to create a url with input and an API key
	let customURL = `${URL}city=${city}`

	//CODE GOES HERE
	try {
		const response = await fetch(customURL, options);
		const result = await response.json();
		// console.log(result);
		return result
	} catch (error) {
		console.error(error);
	}
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async() => {
	const city = document.getElementById('city-input').value;
	// CODE GOES HERE
	const weatherData = await getWeatherData(city);
	console.log(weatherData);
	showWeatherData(city, weatherData);
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = ( city, weatherData ) => {
	//CODE GOES HERE
	document.getElementById("city-name").innerText = city;
	document.getElementById("feels-like").innerText = `Feels Like: ${weatherData.feels_like}`;
	document.getElementById("temp").innerText = weatherData.temp;
	document.getElementById("min-temp").innerText = weatherData.min_temp;
	document.getElementById("max-temp").innerText = weatherData.max_temp;
}

