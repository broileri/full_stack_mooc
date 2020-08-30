import React, {useState} from 'react';
import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';


const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [nameFilter, setNameFilter] = useState('');

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
