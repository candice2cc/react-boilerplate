/**
 * Created by candice on 17/2/3.
 */
import React, {Component} from 'react'

import styles from '../sass/Course.scss'


class Course extends Component {
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
export default Course;