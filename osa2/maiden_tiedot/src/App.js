import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import FilterField from './components/FilterField';
import ResultsContainer from './components/ResultsContainer';


const App = () => {
    const [countries, setCountries] = useState([]);
    const [countryFilter, setCountryFilter] = useState('');

    useEffect(() => {
            axios
                .get('https://restcountries.eu/rest/v2/all')
                .then(response => {
                    setCountries(response.data)
                })
        },
        []
    );

    return (
        <div>
            <FilterField
                countryFilter={countryFilter}
                setCountryFilter={setCountryFilter}
            />
            <ResultsContainer
                countries={countries}
                countryFilter={countryFilter}
                setCountryFilter={setCountryFilter}
            />
        </div>
    );
};

export default App;
