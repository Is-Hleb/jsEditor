import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
    return (
        <h1>Привет</h1>
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}

