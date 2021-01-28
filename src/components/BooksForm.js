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
          <option value={cat}>{cat}</option>
        ))}
      </select>
    </form>
  );
}

export default BooksForm;
