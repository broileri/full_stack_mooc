import React from 'react'

const FilterForm = ({filterValue, setState}) => {
    return (
        <div>
            filter shown with: <input
            value={filterValue}
            onChange={event => setState(event.target.value)}
        />
        </div>
    );
};

export default FilterForm;
