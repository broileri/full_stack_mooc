import React from 'react';

const FilterResult = ({country, setSelectedCountry}) => {
    return (
        <div
            key={country.name}
            className="filter-result-wrapper">
            <div>{country.name}</div>
            <button
                onClick={() => setSelectedCountry(country)}
            >
                Show
            </button>
        </div>
    );
};

export default FilterResult;