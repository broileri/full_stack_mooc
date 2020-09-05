import React from 'react';
import personService from '../services/persons';

const Person = ({person, persons, setPersons}) => {

    const confirmDeletePerson = (person) => {
        if (window.confirm(`Delete "${person.name}"?`)) {
            deletePerson(person);
        }
    };

    const deletePerson = personToRemove => {
        personService.remove(personToRemove.id)
            .then(response => {
                setPersons(persons.filter(person => personToRemove.id !== person.id));
            })
            .catch(error => {
               alert(`Could not remove person "${personToRemove.name}"`);
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
