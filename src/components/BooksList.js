import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';

const BooksList = props => {
  const { books } = props;
  books.map(book => <Book key={book.id} {...book} />);
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

BooksList.propTypes = {

};

export default connect(mapStateToProps)(BooksList);
