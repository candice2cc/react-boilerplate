/**
 * Created by candice on 17/2/4.
 */

import {buildGetPromise, errData, requestError} from './action_util'
import {URL} from '../config/api'

export const RECEIVE_BOOK_LIST = 'RECEIVE_BOOK_LIST';


export const queryBookList = ()=>(dispatch)=> {
    return buildGetPromise(URL.book.list, {})
        .then(response => response.json())
        .then(json => {
            if (json.errNum === 0) {
                dispatch(receiveBookList(json))
            } else {
                dispatch(requestError(json))
            }
        })
        .catch(ex => {
            console.log(ex);
            dispatch(requestError(errData))
        })
};


export const receiveBookList = (response) => {
    return {
        type: RECEIVE_BOOK_LIST,
        bookList: response.retData,
    }
};


