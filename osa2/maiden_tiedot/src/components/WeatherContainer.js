import React, {useState} from 'react';
import axios from 'axios';

const WeatherContainer = ({country}) => {
    const [weather, setWeather] = useState({
        temperature: null,
        wind_degree: null,
        wind_dir: null,
        wind_speed: null,
    });

    const setWeatherAsUnknown = () => {
        setWeather({
            temperature: 'Unknown',
            wind_speed: 'Unknown',
            wind_dir: 'Unknown',
        });
    };

    if (!weather.temperature) {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${country.capital}&units=m`)
            .then(response => {
                if (response.data.current) {
                    setWeather(response.data.current);
                } else {
                    setWeatherAsUnknown();
                }
            })
            .catch(() => setWeatherAsUnknown());
    }

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {weather.temperature} Celsius</p>
            <p>Wind speed: {weather.wind_speed} km/h</p>
            <p>Wind direction: {weather.wind_dir}</p>
        </div>
    );
};

export default WeatherContainer;