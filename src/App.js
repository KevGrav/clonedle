import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import GameBoard from './components/GameBoard';
import './styles/index.css';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/game/:level" element={<GameBoard />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;