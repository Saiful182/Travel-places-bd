import React from 'react';

const Name = (props) => {
    const { name } = props.place;
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default Name