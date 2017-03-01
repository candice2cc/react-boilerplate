/**
 * Created by candice on 17/2/3.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import styles from '../sass/Course.scss'
import {fetchCourseList} from '../../common/actions'


class Course extends Component {


    componentDidMount() {
        this.props.dispatch(fetchCourseList())
    }


    render() {
        let {courseList} = this.props;
        let courseNodes = courseList.map((item)=> {
            return (
                <li key={item.id}>{item.name}</li>
            )
        });

        return (
            <div>
                <ul>
                    {courseNodes}
                </ul>

            </div>
        )

    }

}

const mapStateToProps = (state, props)=> {
    return {
        courseList: state.listCourse.retData,

    }
};

Course = connect(mapStateToProps)(Course);
export default Course;