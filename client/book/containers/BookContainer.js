/**
 * Created by candice on 17/2/3.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import Book from '../components/Book'
import {queryBookList} from '../../common/actions'

class BookContainer extends Component {

    componentDidMount() {
        this.props.dispatch(queryBookList())
    }
    render() {
        return (
            <Book bookList={this.props.bookList}/>
        )
    }

}
const mapStateToProps = (state, props)=> {
    return {
        bookList: state.bookState.bookList,
    }
};

BookContainer = connect(mapStateToProps)(BookContainer);
export default BookContainer;