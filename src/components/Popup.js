import React from 'react';
const Popup = ({ message, onClose }) => {
return (
<div className="popup-overlay" onClick={onClose}>
<div className="popup-content" onClick={e => e.stopPropagation()}>
<p>{message}</p>
<button onClick={onClose}>Close</button>
</div>
</div>
);
};
export default Popup;