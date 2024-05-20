import React from 'react';
const Keyboard = ({ onKeyPress }) => {
const keysRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keysRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace', 'Enter'];
return (
<div className="keyboard">
<div className="key-row">
{keysRow1.map((key) => (
<button key={key} onClick={() => onKeyPress(key)} className="key">
{key}
</button>
))}
</div>
<div className="key-row">
{keysRow2.map((key) => (
<button key={key} onClick={() => onKeyPress(key)} className="key">
{key}
</button>
))}
</div>
<div className="key-row">
{keysRow3.map((key) => (
<button key={key} onClick={() => onKeyPress(key)} className="key">
{key}
</button>
))}
</div>
</div>
);
};
export default Keyboard;