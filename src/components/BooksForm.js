import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { createBook } from "../actions";

const BooksForm = props => {
  const categories = [
    "Action",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Sci-Fi",
  ];

  const [state, setState] = useState({
    title: "",
    category: "Action",
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
      <select name="categories" onChange={onChange}>
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

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
