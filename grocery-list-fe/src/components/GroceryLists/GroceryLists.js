import React from 'react';
import PropTypes from 'prop-types';
import GroceryListsItem from '../GroceryListsItem/GroceryListsItem';
import './GroceryLists.css';

function GroceryLists(props) {
  const { lists, groceryListSelectedHandler } = props;
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

GroceryLists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ),
  groceryListSelectedHandler: PropTypes.func
};

GroceryLists.defaultProps = {
  lists: [],
  groceryListSelectedHandler: () => null
};

export default GroceryLists;
