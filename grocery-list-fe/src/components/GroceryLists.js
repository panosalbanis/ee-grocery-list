import React, { Component } from 'react';
import PropTypes from 'prop-types'
import GroceryListsItem from './GroceryListsItem'

class GroceryLists extends Component {
  render() {
    const { lists, groceryListSelectedHandler} = this.props
    return (
      <div className="groceryLists">
        <ul>
          {
            lists.map(
              ({ id }) =>
                <GroceryListsItem key={id} listId={id} clickHandler={groceryListSelectedHandler} ></GroceryListsItem>
            )
          }
        </ul>
      </div>
    )
  }
}

GroceryLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.object)
  }))
}

GroceryLists.defaultProps = {
  lists: []
};

export default GroceryLists;