import React from 'react';

const Greeting = ({imie, wiek}) => {
    return (
        <div>
            <h3>Witaj, {imie}</h3>
            <h4>Mam {wiek} lat.</h4>
        </div>
    );
};

export default Greeting;