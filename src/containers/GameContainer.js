import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import Popup from '../components/Popup';
import LevelSelection from '../components/LevelSelection';
import { addGuess, resetGame, setError, setGameOver } from '../redux/actions';
const GameContainer = () => {
const dispatch = useDispatch();
const { guesses, solution, isGameOver, error, level } = useSelector(state => state.game);
const [currentGuess, setCurrentGuess] = useState('');
const handleKeyPress = (key) => {
if (key === 'Enter' && currentGuess === solution) {
dispatch(addGuess(currentGuess));
dispatch(setGameOver(true));
} else if (key === 'Enter') {
dispatch(addGuess(currentGuess));
if (currentGuess !== solution) {
setCurrentGuess('');
}
} else if (key === 'Backspace') {
setCurrentGuess(currentGuess.slice(0, -1));
} else if (currentGuess.length < solution.length) {
setCurrentGuess(currentGuess + key);
}
};
if (!level) {
return <LevelSelection />;
}
return (
<div>
<Board guesses={guesses} solutionLength={solution.length} />
<Keyboard onKeyPress={handleKeyPress} />
{error && <Popup message={error} onClose={() => dispatch(setError(null))} />}
{isGameOver && <Popup message="Congratulations, Game Over!" onClose={() =>
dispatch(resetGame())} />}
</div>
);
};
export default GameContainer;