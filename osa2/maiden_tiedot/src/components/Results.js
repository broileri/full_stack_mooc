import React from 'react';
import FilterResult from './FilterResult';

const Results = ({filteredCountries, filterValue, setSelectedCountry}) => {
    return (
        <div className="filter-result-container">
            {filteredCountries.map(country => {
                if (country.name.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0) {
                    return <FilterResult
                        key={country.name}
                        country={country}
                        setSelectedCountry={setSelectedCountry}
                    />
                }
                return null;
            })}</div>
    );
};

export default Results;