import { ADD_GUESS, RESET_GAME, SET_ERROR, SET_GAME_OVER, SET_LEVEL } from
'./types';
const initialState = {
guesses: [],
solution: '',
isGameOver: false,
error: null,
level: null
};
const gameReducer = (state = initialState, action) => {
switch (action.type) {
case ADD_GUESS:
if (state.solution === action.payload) {
return { ...state, isGameOver: true, guesses: [...state.guesses, action.payload] };
}
return { ...state, guesses: [...state.guesses, action.payload] };
case RESET_GAME:
return { ...initialState, level: state.level };
case SET_ERROR:
return { ...state, error: action.payload };
case SET_GAME_OVER:
return { ...state, isGameOver: action.payload };
case SET_LEVEL:
return { ...state, level: action.payload.level, solution: action.payload.solution };
default:
return state;
}
};
export default gameReducer;