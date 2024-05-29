import { SET_LEVEL, MAKE_GUESS, CHECK_GUESS} from '../actions/gameActions';
import { easyWords, mediumWords, hardWords } from '../actions/words';

const initialState = {
level: null,
guesses: [],
gameState: 'in-progress', //Added to track the game state
};

const getRandomWord = (level) => {
    const wordList = level === 'easy' ? easyWords : level === 'medium' ? mediumWords :
    hardWords;
    return wordList[Math.floor(Math.random() * wordList.length)];
    };

const gameReducer = (state = initialState, action) => {
switch (action.type) {
case SET_LEVEL:
return {
...state,
level: action.payload,
word: getRandomWord(action.payload),
guesses: [],
gameState: 'in-progress', // Reset game state on new game
};
case MAKE_GUESS:
return {
...state,
guesses: [...state.guesses, action.payload],
};
case CHECK_GUESS:
return {
...state,
gameState: action.payload,
};
default:
return state;
}
};

export default gameReducer;