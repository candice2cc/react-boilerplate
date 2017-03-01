/**
 * Created by candice on 17/2/4.
 */
import {REQUEST_BOOK, RECEIVE_BOOK} from '../actions/book_actions'

const initialState = {
    retData: []
};
export function listBook(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_BOOK:
            return {
                ...state,
                retData: action.retData
            };
        default:
            return state;

    }

}
