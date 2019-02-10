import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import AddItem from '../AddItem/AddItem';
import './GroceryList.css';

class GroceryList extends Component {
  render() {
    const { list, addItemHandler } = this.props;
    return list && list.id ? (
      <div className="groceryList">
        <ul>
          {list.items &&
            list.items.map(({ name, quantity }) => (
              <Item key={name} name={name} quantity={quantity} />
            ))}
        </ul>
        <div className="addItemContainer">
          <AddItem addItemHandler={addItemHandler} list={list} />
        </div>
      </div>
    ) : null;
  }
}

GroceryList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number
    })
  )
};

GroceryList.defaultProps = {
  items: []
};

export default GroceryList;
