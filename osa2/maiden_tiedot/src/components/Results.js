import React from 'react';
import FilterResult from './FilterResult';

const Results = ({filterCountries, countryFilter, setCountryFilter}) => {
    return (
        <div className="filter-result-container">
            {filterCountries.map(country => {
                if (country.name.toLowerCase().indexOf(countryFilter.toLowerCase()) >= 0) {
                    return <FilterResult
                        key={country.name}
                        country={country}
                        setCountryFilter={setCountryFilter}
                    />
                }
                return null;
            })}</div>
    );
};

export default Results;