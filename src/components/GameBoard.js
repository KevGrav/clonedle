import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkGuess } from '../redux/actions/gameActions';
import Keyboard from './Keyboard';
import '../styles/GameBoard.css';
const GameBoard = () => {
  const { level } = useParams();
  const dispatch = useDispatch();
  const guesses = useSelector((state) => state.game.guesses);
  const gameState = useSelector((state) => state.game.gameState);
  const word = useSelector((state) => state.game.word); // Get the word from state
  const [currentGuess, setCurrentGuess] = useState('');
  const handleGuess = (letter) => {
    if (currentGuess.length < (level === 'easy' ? 3 : level === 'medium' ? 5 : 7)) {
      setCurrentGuess(currentGuess + letter);
    }
  };
  const handleSubmitGuess = () => {
    if (currentGuess.length === (level === 'easy' ? 3 : level === 'medium' ? 5 : 7)) {
      dispatch(checkGuess(currentGuess));
      setCurrentGuess('');
    }
  };
  const renderMessage = () => {
    if (gameState === 'win') {
      return <div className="message">Congratulations! You've won!</div>;
    } else if (gameState === 'lose') {
      return <div className="message">Game Over. The word was: {word}</div>; // Use the word from state
    } else {
      return <div className="message">Keep Guessing!</div>;
    }
  };
  return (
    <div className="game-board">
    <h1>Welcome to Clonedle </h1>  
      {renderMessage()}
      <div className="word-grid">
        {guesses.map((guess, index) => (
          <div key={index} className="word-row">
            {guess.split('').map((letter, i) => (
              <div key={i} className="letter-cell">{letter}</div>
            ))}
          </div>
        ))}
        <div className="word-row current-guess">
          {Array.from({ length: (level === 'easy' ? 3 : level === 'medium' ? 5 : 7) }).map((_, i) => (
            <div key={i} className="letter-cell">{currentGuess[i] || ''}</div>
          ))}
        </div>
      </div>
      <Keyboard onKeyPress={handleGuess} onSubmit={handleSubmitGuess} />
    </div>
  );
};
export default GameBoard;