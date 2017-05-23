/**
 * Created by candice on 2017/5/23.
 */
const LOAD = 'react-boilerplate/course/LOAD';
const LOAD_SUCCESS = 'react-boilerplate/course/LOAD_SUCCESS';
const LOAD_FAIL = 'react-boilerplate/course/LOAD_FAIL';

import {buildGetPromise} from '../../common/helpers/fetch_helper'
import {URL} from '../../common/config/api'


const initialState = {
    loading: false,
    loaded: false,
    errMsg: '',
    dataList: []

};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                loading: true
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                dataList: action.result.retData
            };
        case LOAD_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                dataList: [],
                errMsg: action.error.errMsg
            };
        default:
            return state;

    }
}
export const load = (data) => {
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: buildGetPromise(URL.course.list, data),
    };
};