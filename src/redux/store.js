import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];


//Checks if we're on development.
if (process.env.NODE_ENV==='development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares))

export const persistor = persistStore(store);







