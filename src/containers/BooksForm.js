import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import categories from '../data/categories';

const BooksForm = props => {
  const initState = {
    title: '',
    category: categories[0],
  };

  const [state, setState] = useState(initState);

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const book = {
      id: Math.floor(Math.random() * 9999),
      title: state.title,
      category: state.category,
    };
    props.createBook(book);
    setState(initState);
    document.querySelector('.book-title').value = '';
  };

  return (
    <div className="book-form">
      <div className="line" />
      <h3>Add new book</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" className="book-title" name="title" onChange={onChange} />
        <select name="category" onChange={onChange}>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
