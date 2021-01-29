import React from "react";
import PropTypes from "prop-types";

const Book = props => {
  const { id, title, category, handleRemoveBook } = props;
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
      <th>
        <button onClick={() => handleRemoveBook(id)}>Remove</button>
      </th>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
