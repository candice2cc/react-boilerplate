/**
 * Created by candice on 17/2/3.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {load} from '../../redux/modules/course'

import styles from '../sass/Course.scss'


class CourseContainer extends Component {
    componentWillMount() {
        this.props.load();
    }

    render() {
        let {courseList} = this.props;
        let courseNodes = courseList.map((item) => {
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
const mapStateToProps = (state, ownProps) => {
    return {
        courseList: state.course.dataList
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        load: bindActionCreators(load, dispatch),
    }
};

CourseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseContainer);
export default CourseContainer