import React from 'react';

const ImportSteps = () => {
    return (
    <ol>
        <li>Click on the “import” button at the top left, next to the “create” button.</li>
        <li>Select a file (supported files are KDBX or CSV. More details below.)</li>
        <li>Click on “continue import”</li>
        <li>For KDBX files, you might need to enter a password. Enter it and click “Ok”.</li>
        <li>The import will start. You will see a progress bar.</li>
        <li>At the end of the import, you will see a report. After closing this window, you will see the passwords imported in your workspace.</li>
    </ol>
    );
};

export default ImportSteps;
