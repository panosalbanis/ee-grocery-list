import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GroceryListsItem extends Component {
  render() {
    const {listId, clickHandler} = this.props
    return (
      <button className="listId" onClick={() => clickHandler(listId)}>{listId}</button>
    )
  }
}

GroceryListsItem.propTypes = {
  listId: PropTypes.number.isRequired
}

export default GroceryListsItem;