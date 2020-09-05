import React from 'react';
import Person from './Person';

const PersonList = ({persons, setPersons, nameFilter}) => {
    return (
        <>
            {persons.map(person => {
                if (person.name.toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0) {
                    return <Person
                        key={person.name}
                        person={person}
                        setPersons={setPersons}
                        persons={persons}
                    />
                }
                return null;
            })}
        </>
    );
};

export default PersonList;
