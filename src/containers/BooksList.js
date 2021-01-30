import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = state => {
  const books = state.books.map(book => (
    <Book
      key={book.id}
      /* eslint-disable react/jsx-props-no-spreading  */
      {...book}
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
