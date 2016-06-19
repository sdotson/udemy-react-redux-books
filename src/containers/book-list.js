import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
      return this.props.books.map((book) => {
        return (
          <li
            key={book.title}
            onClick={() => {this.props.selectBook(book)}}
            className="list-group-item">
            {book.title}</li>
        );
      });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// anything returned from this function will end up as props on BookLIst container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result chould be passed to all of our reducers.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// promote booklist from component to container, needs to know about
// this new dispatch method selectBook, make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
