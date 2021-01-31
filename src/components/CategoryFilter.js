import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import categories from '../data/categories';

const CategoryFilter = props => {
  const { handleFilterChange, filter } = props;

  useEffect(() => {
    const select = document.querySelector('.filter');
    if (filter === 'All') {
      select.selectedIndex = 0;
    } else {
      select.selectedIndex = categories.indexOf(filter) + 1;
    }
  }, [filter]);

  return (
    <select
      className="filter"
      name="categoryFilter"
      onChange={e => handleFilterChange(e.target.value)}
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

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CategoryFilter);
