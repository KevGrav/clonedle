import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Keyboard.css';

const Keyboard = ({ onKeyPress, onSubmit }) => {
const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

return (
<div className="keyboard">
<div className="keys">
{keys.map((key) => (
<button key={key} onClick={() => onKeyPress(key)}>
{key}
</button>
))}
</div>
<button className="submit" onClick={onSubmit}>Submit</button>
</div>
);
};

Keyboard.propTypes = {
onKeyPress: PropTypes.func.isRequired,
onSubmit: PropTypes.func.isRequired,
};

export default Keyboard;