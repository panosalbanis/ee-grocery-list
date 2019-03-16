import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

function Item(props) {
  const { name, quantity, onDeleteHandler } = props;
  return (
    <div className="container">
      <li className="row justify-content-between">
        <div className="name col-lg-8">
          <h2>{name}</h2>
        </div>
        <div className="quantity col-lg-2">
          <h2>{quantity}</h2>
        </div>
        <button className="deleteButton" onClick={onDeleteHandler}>
          <h2>x</h2>
        </button>
      </li>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

Item.defaultProps = {
  name: '',
  quantity: ''
};

export default Item;
