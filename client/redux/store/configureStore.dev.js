import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'
import rootReducer from '../modules/reducer'

import clientMiddleware from '../middleware/clientMiddleware'

export default function configureStore(preloadedState) {
    const browserMiddleware = routerMiddleware(browserHistory); // Added this line

    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(clientMiddleware, thunk, logger, browserMiddleware)
    );
    return store
}