import React, { Component } from 'react';
import { List } from '@material-ui/core'
import BookListItem from './BookListItem';
import { Book } from '@material-ui/icons';
class BookList extends Component {
    render() {
        const { onSelectedBook } = this.props;
        const bookItems = this.props.books.map(book => {
            return (
                <BookListItem
                    book={book}
                    key={book.ISBN}
                    onSelectedBook={onSelectedBook}
                />
            )
        })

        return (
            <List>
                {bookItems}
            </List>
        )
    }
}
export default BookList