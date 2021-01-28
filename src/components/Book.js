import React from "react";

const Book = props => {
  const { id, title, category } = props.book;
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
    </tr>
  );
};

export default Book;
