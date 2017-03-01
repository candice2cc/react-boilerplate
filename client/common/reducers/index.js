/**
 * Created by candice on 17/1/25.
 */
import {combineReducers} from 'redux'
import {listBook} from './book_reducers'
import {listCourse} from './course_reducers'

const rootReducer = combineReducers({listBook, listCourse});
export default rootReducer