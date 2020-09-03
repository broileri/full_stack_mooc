import React, {useEffect, useState} from 'react';
import axios from 'axios';

const WeatherContainer = ({country}) => {
    const [weather, setWeather] = useState({
        temperature: null,
        wind_speed: null,
        wind_dir: null,
        weather_icons: [],
    });

    const setWeatherAsUnknown = () => {
        setWeather({
            temperature: 'Unknown',
            wind_speed: 'Unknown',
            wind_dir: 'Unknown',
            weather_icons: [],
        });
    };


    useEffect(() => {
        let isMounted = true;
        if (!weather.temperature) {
            axios
                .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${country.capital}&units=m`)
                .then(response => {
                    if (isMounted) {
                        if (response.data.current) {
                            setWeather(response.data.current);
                        } else {
                            setWeatherAsUnknown();
                        }
                    }
                })
                .catch(() => {
                    if (isMounted) {
                        setWeatherAsUnknown()
                    }
                });
            return () => {
                // set when the component becomes unmounted
                isMounted = false
            };
        }
    });

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {weather.temperature} Celsius</p>
            <div className="weather-icon-container">
                {
                    weather.weather_icons.map(
                        (icon, index) => <img
                            key={`weather-icon-${index}`}
                            src={icon}
                            alt="weather visualization"
                        />)
                }
            </div>
            <p>Wind speed: {weather.wind_speed} km/h</p>
            <p>Wind direction: {weather.wind_dir}</p>
        </div>
    );
};

export default WeatherContainer;