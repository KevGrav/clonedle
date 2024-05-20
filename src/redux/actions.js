import { ADD_GUESS, RESET_GAME, SET_ERROR, SET_GAME_OVER, SET_LEVEL } from
'./types';
export const addGuess = guess => ({
type: ADD_GUESS,
payload: guess
});
export const resetGame = () => ({
type: RESET_GAME
});
export const setError = error => ({
type: SET_ERROR,
payload: error
});
export const setGameOver = isGameOver => ({
type: SET_GAME_OVER,
payload: isGameOver
});
export const setLevel = (level, solution) => ({
type: SET_LEVEL,
payload: { level, solution }
});