/**
 * Created by candice on 17/2/4.
 */

import {buildGetPromise, errData, requestError} from './action_util'
import {URL} from '../config/api'

export const RECEIVE_COURSE = 'RECEIVE_COURSE';


export const fetchCourseList = ()=>(dispatch)=> {
    return buildGetPromise(URL.course.list, {})
        .then(response => response.json())
        .then(json => {
            if (json.errNum === 0) {
                dispatch(receiveProfit(json))
            } else {
                dispatch(requestError(json))
            }
        })
        .catch(ex => {
            console.log(ex);
            dispatch(requestError(errData))
        })
};

export const receiveProfit = (response) => {
    return {
        type: RECEIVE_COURSE,
        retData: response.retData,
        pageSize: response.pageSize,
        pageNum: response.pageNum,
        totalSize: response.totalSize,
        totalPage: response.totalPage
    }
};



