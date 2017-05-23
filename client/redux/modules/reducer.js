/**
 * Created by candice on 17/3/27.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import course from './course';
import book from './book'


export default combineReducers({
    routing: routerReducer,
    course: course,
    book: book


});