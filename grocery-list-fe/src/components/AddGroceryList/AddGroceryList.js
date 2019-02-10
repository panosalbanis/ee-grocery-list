import React, { Component } from 'react';
import './AddGroceryList.css';

class AddGroceryList extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="addList">
        <div className="button" onClick={handleClick}>
          Add Grocery List
        </div>
      </div>
    );
  }
}

export default AddGroceryList;
