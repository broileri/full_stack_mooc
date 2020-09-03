import React from 'react';

const FilterField = ({countryFilter, setCountryFilter}) => {
    return (
        <form>
            <label
                htmlFor="search"
            >
                Find countries:
            </label>
            <input
                id="search"
                type="text"
                value={countryFilter}
                onChange={event => setCountryFilter(event.target.value)}
            />
        </form>
    );
};

export default FilterField;