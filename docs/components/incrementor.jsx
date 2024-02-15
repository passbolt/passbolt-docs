import React from 'react';

let counter = 0;

const Incrementor = ({ title, productName, resetCounter }) => {
    if (resetCounter) {
        counter = 0;
    }
    counter += 1;

    if (typeof title !== 'string') {
        console.error('Incrementor expects a string as title');
        return null;
    }

    const processedTitle = productName
        ? title.replace(/\{productName\}/g, productName.toLowerCase())
        : title;

    return <h3>Step {counter}. {processedTitle}</h3>;
};

export default Incrementor;
