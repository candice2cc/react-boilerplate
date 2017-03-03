/**
 * Created by candice on 17/2/3.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {queryCourseList} from '../../common/actions'
import Course from '../components/Course'

class CourseContainer extends Component {


    componentDidMount() {
        this.props.dispatch(queryCourseList())
    }


    render() {
        return <Course courseList={this.props.courseList}/>

    }

}

const mapStateToProps = (state, props)=> {
    return {
        courseList: state.courseState.coursePageInfo.courseList,

    }
};

CourseContainer = connect(mapStateToProps)(CourseContainer);
export default CourseContainer;