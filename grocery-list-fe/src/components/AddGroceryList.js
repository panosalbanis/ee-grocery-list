import React, { Component } from 'react';

class AddGroceryList extends Component {
  render() {
    const { handleClick } = this.props
    return (
      <div className="addList">
        <button onClick={handleClick}>Add Grocery List</button>
      </div>
    )
  }
}

export default AddGroceryList;