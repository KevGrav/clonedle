import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import gameReducer from '../reducers/gameReducers';
const rootReducer = combineReducers({
game: gameReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;