import React, { useState, useEffect } from 'react';
import personService from './services/persons';
import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';


const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [nameFilter, setNameFilter] = useState('');

    const hook = () => {
        personService
            .getAll()
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
            <PersonList
                persons={persons}
                setPersons={setPersons}
                nameFilter={nameFilter}
            />
        </div>
    );
};

export default App;
