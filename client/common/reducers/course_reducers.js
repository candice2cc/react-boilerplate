/**
 * Created by candice on 17/2/4.
 */
import {RECEIVE_COURSE} from '../actions/course_actions'

const initialState = {
    retData: []
};
export function listCourse(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_COURSE:
            return {
                ...state,
                retData: action.retData
            };
        default:
            return state;

    }

}
