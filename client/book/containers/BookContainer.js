/**
 * Created by candice on 17/2/3.
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {load} from '../../redux/modules/book'
import styles from '../sass/Book.scss'

class BookContainer extends Component {
    componentWillMount() {
        this.props.load();
    }

    render() {
        let {bookList} = this.props;
        let bookNodes = bookList.map((item) => {
            return (
                <li key={item.id}>{item.name}</li>
            )
        });
        return (
            <div className={styles.root}>
                <ul>
                    {bookNodes}
                </ul>
            </div>
        )
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        bookList: state.book.dataList
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        load: bindActionCreators(load, dispatch),
    }
};

BookContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookContainer);
export default BookContainer