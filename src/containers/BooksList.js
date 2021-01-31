import React from "react";
import { connect } from "react-redux";
import Book from "../components/Book";
import { removeBook, changeFilter } from "../actions";
import CategoryFilter from "../components/CategoryFilter";

const BooksList = state => {
  const handleRemoveBook = id => {
    state.removeBook(id);
  };

  const handleFilter = filter => {
    state.changeFilter(filter);
  };

  const books = state.books.map(book => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      category={book.category}
      handleRemoveBook={handleRemoveBook}
    />
  ));

  return (
    <>
      <CategoryFilter handleFilter={handleFilter} />
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
    </>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
