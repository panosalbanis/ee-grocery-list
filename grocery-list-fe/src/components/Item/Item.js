import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

function Item(props) {
  const { name, quantity } = props;
  return (
    <li>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
    </li>
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
