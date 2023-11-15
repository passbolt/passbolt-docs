import React from 'react';

let counter = 0;

const Incrementor = ({ title, productName }) => {
    counter += 1;

    if (typeof title !== 'string') {
        console.error('Incrementor expects a string as title');
        return null;
    }

    const processedTitle = productName
        ? title.replace(/\{productName\}/g, productName.toLowerCase())
        : title;

    return <b>Step {counter}. {processedTitle}</b>;
};

export default Incrementor;
