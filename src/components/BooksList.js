import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BooksList = state => {
  const books = state.books.map(book => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      category={book.category}
    />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>{books}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
