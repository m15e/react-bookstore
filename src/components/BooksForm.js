import React from "react";

function BooksForm() {
  const categories = [
    "Action",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Sci-Fi",
  ];
  return (
    <form>
      <input type="text" name="title" />
      <select name="categories">
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BooksForm;
