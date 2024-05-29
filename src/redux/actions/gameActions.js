export const SET_LEVEL = 'SET_LEVEL';
export const MAKE_GUESS = 'MAKE_GUESS';
export const CHECK_GUESS = 'CHECK_GUESS';

export const setLevel = (level) => ({
type: SET_LEVEL,
payload: level,
});

export const makeGuess = (guess) => ({
type: MAKE_GUESS,
payload: guess,
});

export const checkGuess = (guess) => {
return (dispatch, getState) => {
const state = getState();
const { word } = state.game;
let result = 'in-progress';

if (guess === word) {
result = 'win';
} else if (state.game.guesses.length >= 5) {
result = 'lose';
}
dispatch({
type: MAKE_GUESS,
payload: guess,
});

dispatch({
type: CHECK_GUESS,
payload: result,
});
};
};