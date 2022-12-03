import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Books from './static_data/Books';
import BookDetail from './components/BookDetail';

class App extends Component {

  constructor(props) {
    super(props); // this객체 할당을위함
    this.state = {
      books: Books,
      selectedBook: Books[0]  // 선택된 초깃값을 첫번쨰 책으로지정
    }
  }
  onSearchTitle(title) {
    console.log(title);
    let updateList = Books;
    updateList = updateList.filter(book => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1; // 포함하고있는것 찾음
    })
    console.log(updateList);
    this.setState({
      books: updateList
    });
  }
  onSelectedBook(book) { // onclick하면 해당 book이 bookdetail에 랜더링
    this.setState({
      selectedBook: book
    });
  }
  render() {
    return (
      <Container>
        <SearchBar onSearchTitle={this.onSearchTitle.bind(this)} />
        <Grid container spacing={2}>
          <Grid item>
            <BookList onSelectedBook={this.onSelectedBook.bind(this)} books={this.state.books} />
          </Grid>
          <Grid item>
            <BookDetail book={this.state.selectedBook} />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default App;
