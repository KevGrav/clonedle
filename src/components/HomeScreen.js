import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomeScreen.css';
const HomeScreen = () => {
  const navigate = useNavigate();
  const handleLevelSelect = (level) => {
    navigate(`/game/${level}`);
  };
  return (
    <div className="home-screen">
      <h1>Clone-dle</h1>
      <div className="level-selection">
        <button onClick={() => handleLevelSelect('easy')}>Easy (3-letter words)</button>
        <button onClick={() => handleLevelSelect('medium')}>Medium (5-letter words)</button>
        <button onClick={() => handleLevelSelect('hard')}>Hard (7-letter words)</button>
      </div>
    </div>
  );
};
export default HomeScreen;
