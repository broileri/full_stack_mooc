import React from 'react';

const FilterField = ({filterValue, setFilterValue, countries, setFilteredCountries, setSelectedCountry}) => {
    const filterCountries = (value) => {
        const filteredCountries = countries.filter(country => {
            return country.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        });

        let selectedCountry = null;

        if (filteredCountries.length === 1) {
            console.log();
            selectedCountry = filteredCountries[0];
        }

        setFilterValue(value);
        setSelectedCountry(selectedCountry);
        setFilteredCountries(filteredCountries);
    };

    return (
        <form>
            <label
                htmlFor="search"
            >
                Find countries:
            </label>
            <input
                autoComplete="off"
                id="search"
                type="text"
                value={filterValue}
                onChange={event => filterCountries(event.target.value)}
            />
        </form>
    );
};

export default FilterField;