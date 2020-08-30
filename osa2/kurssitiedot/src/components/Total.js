import React from 'react';

const Total = ({ course }) => {
    const exercises = course.parts.reduce((sumOfPrevious, current) => sumOfPrevious + current.exercises, 0);
    return (
        <>
            <p><b>Total of {exercises} exercises</b></p>
        </>
    )
};

export default Total;