import React, { useEffect } from "react";
import { connect } from "react-redux";
import categories from "../data/categories";

const CategoryFilter = props => {
  const { handleFilter, filter } = props;

  useEffect(() => {
    const select = document.querySelector(".filter");
    if (filter === "All") {
      console.log(filter);
      select.selectedIndex = 0;
    } else {
      select.selectedIndex = categories.indexOf(filter) + 1;
    }
  }, [filter]);

  return (
    <select
      className="filter"
      name="categoryFilter"
      onChange={e => handleFilter(e.target.value)}
    >
      <option value="All">All</option>
      {categories.map(cat => (
        <option key={Math.floor(Math.random() * 999)} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(CategoryFilter);
