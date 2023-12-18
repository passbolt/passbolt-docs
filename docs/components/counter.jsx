import React from 'react';

let currentChapter = 0;
let counter = 0;

const Counter = ({ chapter, title, resetCounter }) => {
    if (chapter !== currentChapter || resetCounter) {
        counter = 0;
        currentChapter = chapter;
    }
    counter += 1;
    return <h4>{chapter}.{counter}. {title}</h4>;
};

export default Counter;
