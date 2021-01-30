import React from "react";
import funky from "../data";

const CategoryFilter = props => {
  console.log(`from catfilter ${funky}`);

  return (
    <select name="filter">
      {funky.map(cat => (
        <option key={cat + "1"} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
