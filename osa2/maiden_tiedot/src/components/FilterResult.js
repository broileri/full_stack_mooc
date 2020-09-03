import React from 'react';

const FilterResult = ({country, setCountryFilter}) => {
    return (
        <div
            key={country.name}
            className="filter-result-wrapper">
            <div>{country.name}</div>
            <button
                onClick={() => setCountryFilter(country.name)}
            >
                Show
            </button>
        </div>
    );
};

export default FilterResult;