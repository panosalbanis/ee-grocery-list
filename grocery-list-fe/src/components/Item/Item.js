import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

function Item(props) {
  const { listId, itemId, name, quantity, deleteItemHandler } = props;
  return (
    <div className="container">
      <li className="row justify-content-between">
        <div className="name col-lg-8">
          <h2>{name}</h2>
        </div>
        <div className="quantity col-lg-2">
          <h2>{quantity}</h2>
        </div>
        <button
          className="deleteButton"
          onClick={() => deleteItemHandler(listId, itemId)}
        >
          <h2>x</h2>
        </button>
      </li>
    </div>
  );
}

Item.propTypes = {
  listId: PropTypes.number.isRequired,
  itemId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  deleteItemHandler: PropTypes.func
};

Item.defaultProps = {
  name: '',
  quantity: '',
  deleteItemHandler: () => null
};

export default Item;
