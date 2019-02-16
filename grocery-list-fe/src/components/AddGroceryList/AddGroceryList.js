import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddGroceryList.css';

class AddGroceryList extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="addListContainer">
        <div className="button" onClick={handleClick}>
          Add Grocery List
        </div>
      </div>
    );
  }
}

AddGroceryList.propTypes = {
  handleClick: PropTypes.func
};

AddGroceryList.defaultProps = {
  handleClick: () => null
};

export default AddGroceryList;
