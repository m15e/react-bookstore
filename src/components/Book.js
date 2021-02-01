import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const {
    id, title, category, handleRemoveBook,
  } = props;

  return (
    <div className="book">
      <div className="is-half" id={id}>
       <div className="info">
          <strong>{category}</strong>
          <h3>{title}</h3>
          <a className="author">Suzanne Collins</a>
          <ul>
            <li><a href="#">Comments</a></li>
            <li><a href="#" onClick={() => handleRemoveBook(id)}>Remove</a></li>
            <li><a href="#">Edit</a></li>
          </ul>
       </div>
      </div>
      <div className="is-half">
        <div className="pct-col">
          <div className="circle">
           
          </div>
          <p className='pct-complete'>{Math.floor(Math.random()*99)}&#37;<span>Completed</span></p>
          
        </div>
        <div className="progress-col">
          <h5>Current Chapter</h5>
          <p>Chapter 17</p>
          <button type='button'>Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
