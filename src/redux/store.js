import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import PokeReducer from './pokeDucks';

//Aqui van mis reducers
const rootReducers = combineReducers({
    pokemones: PokeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(
        rootReducers,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}

