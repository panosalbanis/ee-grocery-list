import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GroceryListsItem.css';

class GroceryListsItem extends Component {
  render() {
    const { listId, clickHandler } = this.props;
    return (
      <li>
        <div className="listId button" onClick={() => clickHandler(listId)}>
          List {listId}
        </div>
      </li>
    );
  }
}

GroceryListsItem.propTypes = {
  listId: PropTypes.number.isRequired,
  clickHandler: PropTypes.func
};

GroceryListsItem.defaultProps = {
  clickHandler: () => null
};

export default GroceryListsItem;
