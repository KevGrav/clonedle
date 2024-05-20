import React from 'react';
import { useDispatch } from 'react-redux';
import { setLevel } from '../redux/actions';
const LevelSelection = () => {
const dispatch = useDispatch();
const handleLevelSelect = (level) => {
const solutions = {
easy: 'CAT',
medium: 'REACT',
hard: 'JAVASCRIPT'
};
const solution = solutions[level];
dispatch(setLevel(level, solution));
};
return (
<div className="level-selection">
<h2>Select Level</h2>
<button onClick={() => handleLevelSelect('easy')}>Easy (3 letters)</button>
<button onClick={() => handleLevelSelect('medium')}>Medium (5 letters)</button>
<button onClick={() => handleLevelSelect('hard')}>Hard (7 letters)</button>
</div>
);
};
export default LevelSelection;
