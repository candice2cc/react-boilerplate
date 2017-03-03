/**
 * Created by candice on 17/2/3.
 */
import React, {Component} from 'react'
import styles from '../sass/Book.scss'

class Book extends Component {
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
export default Book;