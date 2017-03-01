/**
 * Created by candice on 17/2/3.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'


import styles from '../sass/Book.scss'
import {fetchBookList} from '../../common/actions'

class Book extends Component {

    componentDidMount() {
        this.props.dispatch(fetchBookList())
    }


    render() {
        let {bookList} = this.props;
        let bookNodes = bookList.map((item)=> {
            return (
                <li key={item.id}>{item.name}</li>
            )
        });

        return (
            <div>
                <ul>
                    {bookNodes}
                </ul>

            </div>
        )

    }

}
const mapStateToProps = (state, props)=> {
    return {
        bookList: state.listBook.retData,

    }
};

Book = connect(mapStateToProps)(Book);
export default Book;