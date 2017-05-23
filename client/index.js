/**
 * Created by candice on 17/1/23.
 */
import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'

import routes from './routes'

import configureStore from './redux/store'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


render(
    <Provider store={store}>
        <Router routes={routes} history={history}/>
    </Provider>,
    document.getElementById('root')
);


