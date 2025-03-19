
import { response } from 'express';
import { get } from 'http';
import readline from 'readline/promises';

const API_KEY = '1012abd5e595450abb048256473b86a5' ;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather' ;

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getWeather = async(city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric` ;

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('City not found. please check the city name.');
        }
        const weatherData = await response.json();
        console.log(weatherData);

        console.log('\nWheater Information:');
        console.log(`city: ${weatherData.name}`);
        console.log(`Tempareture: ${weatherData.main.temp} degree C`) ;
        console.log(`Humidity: ${weatherData.main.humidity}%`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
    }
    catch (error) {
        console.log(error);
    }
}

const city = await r1.question('Enter a city name to get its weather:');
await getWeather(city);
r1.close();