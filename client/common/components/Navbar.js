/**
 * Created by candice on 17/3/1.
 */
import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import styles from '../sass/Navbar'

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <nav className={styles.navbar}>
                <IndexLink className={styles.link} activeClassName={styles.active} to="/">home</IndexLink>
                <Link className={styles.link} activeClassName={styles.active} to="/book">book</Link>
                <Link className={styles.link} activeClassName={styles.active} to="/course">course</Link>
            </nav>
        )
    }
}

export default Navbar