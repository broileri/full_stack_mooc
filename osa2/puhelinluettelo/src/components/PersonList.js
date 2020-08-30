import React from 'react';
import Person from './Person';

const PersonList = ({persons, nameFilter}) => {
    return (
        <>
            {persons.map(person => {
                if (person.name.toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0) {
                    return <Person key={person.name} person={person}/>
                }
                return null;
            })}
        </>
    );
};

export default PersonList;
