/**
 * Created by candice on 17/2/4.
 */

import {buildGetPromise, errData, requestError} from './action_util'
import {URL} from '../common/api'

export const REQUEST_BOOK = 'REQUEST_BOOK';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';


export const fetchBookList = ()=>(dispatch)=> {
    return buildGetPromise(URL.book.list, {})
        .then(response => response.json())
        .then(json => {
            if (json.errNum === 0) {
                dispatch(receiveBlurApp(json))
            } else {
                dispatch(requestError(json))
            }
        })
        .catch(ex => {
            console.log(ex);
            dispatch(requestError(errData))
        })
};
export const requestApp = ()=> {
    return {
        type: REQUEST_BOOK
    }

};

export const receiveBlurApp = (response) => {
    return {
        type: RECEIVE_BOOK,
        retData: response.retData,
    }
};


