import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import categories from '../data/categories';

const BooksForm = props => {
  const [state, setState] = useState({
    title: '',
    category: categories[0],
  });

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const book = {
      id: Math.floor(Math.random() * 999),
      title: state.title,
      category: state.category,
    };
    props.createBook(book);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" onChange={onChange} />
      <select name="category" onChange={onChange}>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
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
