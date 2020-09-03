import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';


const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [nameFilter, setNameFilter] = useState('');

    const hook = () => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }

    useEffect(hook, [])

    return (
        <div>
            <h1>Phonebook</h1>
            <FilterForm filterValue={nameFilter} setState={setNameFilter}/>
            <h2>Add New</h2>
            <PersonForm
                persons={persons}
                setPersons={setPersons}
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
            />
            <h2>Numbers</h2>
            <PersonList persons={persons} nameFilter={nameFilter}/>
        </div>
    );
};

export default App;
