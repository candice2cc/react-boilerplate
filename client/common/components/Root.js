/**
 * Created by candice on 17/1/26.
 */
import React, {Component, PropTypes} from 'react'

import '../sass/common.scss'  //import公共样式

import styles from '../sass/Root'


import Header from './Header'
import Navbar from './Navbar'


class Root extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    render() {
        let {children} = this.props;
        return (
            <div className={styles.root}>

                <Header/>
                <Navbar/>

                <div className={styles.main}>
                    {children}
                </div>

            </div>

        )

    }

}
export default Root;