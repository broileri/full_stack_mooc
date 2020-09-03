import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import FilterField from './components/FilterField';
import ResultsContainer from './components/ResultsContainer';


const App = () => {
    const [countries, setCountries] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([...countries]);
    const [selectedCountry, setSelectedCountry] = useState(null);

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
                countries={countries}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                setFilteredCountries={setFilteredCountries}
                setSelectedCountry={setSelectedCountry}
            />
            <ResultsContainer
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                filteredCountries={filteredCountries}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
            />
        </div>
    );
};

export default App;
