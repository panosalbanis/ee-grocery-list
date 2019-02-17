import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

function Item(props) {
  const { name, quantity } = props;
  return (
    <div className="container">
      <li className="row justify-content-between">
        <div className="name col-lg-8">{name}</div>
        <div className="quantity col-lg-2">{quantity}</div>
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
