import React from 'react';
import WeatherContainer from './WeatherContainer';

const CountryInfo = ({country}) => {
    return (
        <div className="filter-result-container">
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Spoken Languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <div className="flag-container">
                <img src={country.flag} alt="flag"/>
            </div>
            <WeatherContainer country={country}/>
        </div>
    );
};

export default CountryInfo;