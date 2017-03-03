/**
 * Created by candice on 17/1/25.
 */
import {combineReducers} from 'redux'
import {bookState} from './book_reducers'
import {courseState} from './course_reducers'

const rootReducer = combineReducers({bookState, courseState});
export default rootReducer