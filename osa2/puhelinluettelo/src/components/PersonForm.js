import React from 'react';
import personService from '../services/persons';

const PersonForm = (props) => {
    const {
        persons,
        setPersons,
        newName,
        setNewName,
        newNumber,
        setNewNumber,
        setNotification,
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
                    setNotification({ type: 'success', message: `Person "${response.data.name}" was added successfully!`});
                    setPersons(persons.concat(response.data));
                    setNewName('');
                    setNewNumber('');
                })
                .catch(error => {
                    setNotification({ type: 'error', message: `Could not add person "${newPerson.name}" to phonebook!`});
                })
        } else if (persons[index].number !== newPerson.number) {
            if (window.confirm(`"${newPerson.name}" is already added to phonebook, replace the old number with the new one?`)) {
                personService
                    .update(persons[index].id, newPerson)
                    .then(response => {
                        const newPersons = [...persons];
                        setNotification({ type: 'success', message: `The number of "${newPerson.name}" was updated successfully!`});
                        newPersons[index].number = response.data.number;
                        setPersons(newPersons);
                        setNewName('');
                        setNewNumber('');
                    })
                    .catch(error => {
                        setNotification({ type: 'error', message: `Could not update number for person "${newPerson.name}"!`});
                    });
            }
        } else {
            setNotification({ type: 'error', message: `Person "${newPerson.name}" is already added to phonebook!`});
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
