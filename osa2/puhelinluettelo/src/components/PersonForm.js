import React from 'react'

const PersonForm = (props) => {
    const {
        persons,
        setPersons,
        newName,
        setNewName,
        newNumber,
        setNewNumber
    } = props;

    const personExists = newPerson => {
        return persons.findIndex(person => person.name === newPerson.name) >= 0;
    };

    const addPerson = event => {
        event.preventDefault();
        const newPerson = {
            name: newName,
            number: newNumber,
        };

        if (personExists(newPerson)) {
            alert(`${newPerson.name} is already added to phonebook`);
        } else {
            setPersons(persons.concat(newPerson));
            setNewName('');
            setNewNumber('');
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
