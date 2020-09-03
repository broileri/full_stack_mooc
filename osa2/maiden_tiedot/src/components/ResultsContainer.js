import React from 'react';
import CountryInfo from './CountryInfo';
import Results from './Results';

const ResultsContainer = ({countries, countryFilter, setCountryFilter}) => {
    const filterCountries = countries.filter(country => {
            return country.name.toLowerCase().indexOf(countryFilter.toLowerCase()) >= 0;
        }
    );

    if (!countryFilter.length) {
        return null;
    } else if (filterCountries.length === 1) {
        return <CountryInfo country={filterCountries[0]}/>
    } else if (filterCountries.length > 10) {
        return <div className="filter-result-container">Too many matches, specify another filter.</div>
    } else if (!filterCountries.length) {
        return <div className="filter-result-container">No matches, specify another filter.</div>
    } else {
        return <Results
            filterCountries={filterCountries}
            countryFilter={countryFilter}
            setCountryFilter={setCountryFilter}
        />
    }
};

export default ResultsContainer;