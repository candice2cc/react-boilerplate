/**
 * Created by candice on 17/2/4.
 */
import {RECEIVE_BOOK_LIST} from '../actions/book_actions'

const initialState = {
    bookList: []
};
export function bookState(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_BOOK_LIST:
            return {
                ...state,
                bookList: action.bookList
            };
        default:
            return state;

    }

}
