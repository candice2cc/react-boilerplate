/**
 * Created by candice on 17/3/1.
 */
import React, {Component} from 'react'
import styles from '../sass/Header'
import avatar from '../assets/avatar.png'

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.left}>
                    <span className={styles.span}>Boilerplate</span>
                </div>
                <div className={styles.right}>
                    <img className={styles.img} src={avatar}/>
                </div>
            </header>
        );

    }
}

export default Header
