import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroceryListsItem from '../GroceryListsItem/GroceryListsItem';
import './GroceryLists.css';

class GroceryLists extends Component {
  render() {
    const { lists, groceryListSelectedHandler } = this.props;
    return (
      <div className="groceryListsContainer">
        <ul className="groceryListsList">
          {lists.map(({ id }) => (
            <GroceryListsItem
              key={id}
              listId={id}
              clickHandler={groceryListSelectedHandler}
            />
          ))}
        </ul>
      </div>
    );
  }
}

GroceryLists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      items: PropTypes.arrayOf(PropTypes.object)
    })
  )
};

GroceryLists.defaultProps = {
  lists: []
};

export default GroceryLists;
