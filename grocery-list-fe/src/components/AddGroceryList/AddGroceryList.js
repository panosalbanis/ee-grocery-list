import React from 'react';
import PropTypes from 'prop-types';
import './AddGroceryList.css';

function AddGroceryList(props) {
  const { handleClick } = props;
  return (
    <div className="addListContainer">
      <div className="button" onClick={handleClick}>
        Add Grocery List
      </div>
    </div>
  );
}

AddGroceryList.propTypes = {
  handleClick: PropTypes.func
};

AddGroceryList.defaultProps = {
  handleClick: () => null
};

export default AddGroceryList;
