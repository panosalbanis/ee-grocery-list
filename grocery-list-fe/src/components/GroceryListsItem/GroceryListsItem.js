import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './GroceryListsItem.css'

class GroceryListsItem extends Component {
  render() {
    const {listId, clickHandler} = this.props
    return (
      <li>
        <div className="listId" onClick={() => clickHandler(listId)}>{listId}</div>
      </li>
    )
  }
}

GroceryListsItem.propTypes = {
  listId: PropTypes.number.isRequired
}

export default GroceryListsItem;