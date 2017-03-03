/**
 * Created by candice on 17/2/4.
 */
import {RECEIVE_COURSE_LIST} from '../actions/course_actions'

const initialState = {
    coursePageInfo: {
        courseList: [],
        pageSize: 10,
        pageNum: 1,
        totalSize: 0,
        totalPage: 0
    }
};
export function courseState(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_COURSE_LIST:
            let coursePageInfo = {
                courseList: action.courseList,
                pageSize: action.pageSize,
                pageNum: action.pageNum,
                totalSize: action.totalSize,
                totalPage: action.totalPage
            };
            return {
                ...state,
                coursePageInfo: coursePageInfo
            };
        default:
            return state;

    }

}
