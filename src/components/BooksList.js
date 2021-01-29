import React from "react";
import { connect } from "react-redux";
import Book from "./Book";
import { removeBook } from "../actions";

const BooksList = props => {
  const handleRemoveBook = id => {
    props.removeBook(id);
  };

  const books = props.books.map(book => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      category={book.category}
      handleRemoveBook={handleRemoveBook}
    />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>{books}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
