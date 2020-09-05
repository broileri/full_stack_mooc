import React from 'react';
import CountryInfo from './CountryInfo';
import Results from './Results';


const ResultsContainer = ({filterValue, filteredCountries, selectedCountry, setSelectedCountry}) => {

    if (!filterValue.length) {
        return null;
    } else if (selectedCountry) {
        return <CountryInfo country={selectedCountry}/>
    } else if (filteredCountries.length > 10) {
        return <div className="filter-result-container">Too many matches, specify another filter.</div>
    } else if (!filteredCountries.length) {
        return <div className="filter-result-container">No matches, specify another filter.</div>
    } else {
        return <Results
            filteredCountries={filteredCountries}
            filterValue={filterValue}
            setSelectedCountry={setSelectedCountry}
        />
    }
};

export default ResultsContainer;