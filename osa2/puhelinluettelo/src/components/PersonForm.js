import React from 'react';
import personService from '../services/persons';

const PersonForm = (props) => {
    const {
        persons,
        setPersons,
        newName,
        setNewName,
        newNumber,
        setNewNumber
    } = props;

    const addPerson = event => {
        event.preventDefault();
        const newPerson = {
            name: newName,
            number: newNumber,
        };

        const index = persons.findIndex(person => person.name === newPerson.name);

        if (index < 0) {
            personService
                .create(newPerson)
                .then(response => {
                    setPersons(persons.concat(response.data));
                    setNewName('');
                    setNewNumber('');
                })
                .catch(error => {
                    alert(`Could not add person "${newPerson.name}" to phonebook`);
                })
        } else if (persons[index].number !== newPerson.number) {
            if (window.confirm(`"${newPerson.name}" is already added to phonebook, replace the old number with the new one?`)) {
                personService
                    .update(persons[index].id, newPerson)
                    .then(response => {
                        const newPersons = [...persons];
                        newPersons[index].number = response.data.number;
                        setPersons(newPersons);
                        setNewName('');
                        setNewNumber('');
                    })
                    .catch(error => {
                        alert(`Could not update number for person "${newPerson.name}"`);
                    });
            }
        } else {
            alert(`${newPerson.name} is already added to phonebook`);
        }
    };

    return (
        <>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                    value={newName}
                    onChange={event => setNewName(event.target.value)}
                />
                    <div>number: <input
                        value={newNumber}
                        onChange={event => setNewNumber(event.target.value)}
                    />
                    </div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    );
};

export default PersonForm;
