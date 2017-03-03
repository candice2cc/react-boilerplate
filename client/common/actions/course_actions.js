/**
 * Created by candice on 17/2/4.
 */

import {buildGetPromise, errData, requestError} from './action_util'
import {URL} from '../config/api'

export const RECEIVE_COURSE_LIST = 'RECEIVE_COURSE_LIST';


export const queryCourseList = ()=>(dispatch)=> {
    return buildGetPromise(URL.course.list, {})
        .then(response => response.json())
        .then(json => {
            if (json.errNum === 0) {
                dispatch(receiveCourseList(json))
            } else {
                dispatch(requestError(json))
            }
        })
        .catch(ex => {
            console.log(ex);
            dispatch(requestError(errData))
        })
};

export const receiveCourseList = (response) => {
    return {
        type: RECEIVE_COURSE_LIST,
        courseList: response.retData,
        pageSize: response.pageSize,
        pageNum: response.pageNum,
        totalSize: response.totalSize,
        totalPage: response.totalPage
    }
};



