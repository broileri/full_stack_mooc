import React, { useState, useEffect } from 'react';
import personService from './services/persons';
import './index.css';
import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import Notification from './components/Notification'


const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [notification, setNotification] = useState(null);

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
            <Notification
                notification={notification}
                setNotification={setNotification}
            />
            <FilterForm filterValue={nameFilter} setState={setNameFilter}/>
            <h2>Add New</h2>
            <PersonForm
                persons={persons}
                setPersons={setPersons}
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                setNotification={setNotification}
            />
            <h2>Numbers</h2>
            <PersonList
                persons={persons}
                setPersons={setPersons}
                nameFilter={nameFilter}
                setNotification={setNotification}
            />
        </div>
    );
};

export default App;
