import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import AddItem from '../AddItem/AddItem';
import './GroceryList.css';

function GroceryList(props) {
  const { list, addItemHandler } = props;
  return list && list.id ? (
    <div className="col">
      <div className="groceryList">
        <ul className="noPadding">
          {list.items &&
            list.items.map(({ name, quantity }) => (
              <Item key={name} name={name} quantity={quantity} />
            ))}
        </ul>
      </div>
      <div className="addItemContainer">
        <AddItem addItemHandler={addItemHandler} list={list} />
      </div>
    </div>
  ) : (
    <h2 className="noList">Select a list or add a new one</h2>
  );
}

GroceryList.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        quantity: PropTypes.number
      })
    )
  }),
  addItemHandler: PropTypes.func
};

GroceryList.defaultProps = {
  addItemHandler: () => null
};

export default GroceryList;
