import React from 'react';
const Board = ({ guesses, solutionLength }) => {
return (
<div className="board">
{guesses.map((guess, index) => (
<div key={index} data-testid="word-row" className="word-row">
{Array.from({ length: solutionLength }).map((_, charIndex) => (
<div key={charIndex} className="char-box">
{guess[charIndex] || ""}
</div>
))}
</div>
))}
</div>
);
};
export default Board;