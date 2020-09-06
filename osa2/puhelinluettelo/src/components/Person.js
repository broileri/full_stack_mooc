import React from 'react';
import personService from '../services/persons';

const Person = ({person, persons, setPersons, setNotification}) => {

    const confirmDeletePerson = (person) => {
        if (window.confirm(`Delete "${person.name}"?`)) {
            deletePerson(person);
        }
    };

    const deletePerson = personToRemove => {
        personService.remove(personToRemove.id)
            .then(response => {
                setNotification({type: 'success', message: `Person "${personToRemove.name}" was removed from phonebook!`});
                setPersons(persons.filter(person => personToRemove.id !== person.id));
            })
            .catch(error => {
                console.log(error);
                setNotification({type: 'error', message: `Could not remove person "${personToRemove.name}"!`});
            });
    };

    return (
        <div key={person.name}>
            {person.name}
            &nbsp;
            {person.number}
            &nbsp;
            <button
                onClick={() => confirmDeletePerson(person)}
            >
                Delete
            </button>
        </div>);
};

export default Person;
