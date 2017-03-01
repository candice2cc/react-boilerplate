/**
 * Created by candice on 17/1/23.
 */
import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes'

import configureStore from './common/store/configure_store'

const store = configureStore();


render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);


