import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../modules/reducer'
import clientMiddleware from '../middleware/clientMiddleware'

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(clientMiddleware, thunk)
    );

    return store
}