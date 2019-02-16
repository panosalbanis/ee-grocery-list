import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddItem.css';

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quantity: ''
    };
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.quantityChangeHandler = this.quantityChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChangeHandler(event) {
    event.persist();
    this.setState({ name: event.target.value });
  }

  quantityChangeHandler(event) {
    event.persist();
    this.setState({ quantity: event.target.value });
  }

  handleSubmit(event, listId, addItemHandler) {
    event.preventDefault();
    addItemHandler(listId, this.state.name, parseInt(this.state.quantity));
    this.setState({
      name: '',
      quantity: ''
    });
  }

  render() {
    const { addItemHandler, list } = this.props;
    return (
      <form
        onSubmit={event => this.handleSubmit(event, list.id, addItemHandler)}
      >
        <span className="addItem">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.nameChangeHandler}
            />
          </label>
          <label>
            Quantity
            <input
              type="text"
              name="quantity"
              value={this.state.quantity}
              onChange={this.quantityChangeHandler}
            />
          </label>
          <input type="submit" className="button" value="Add Item" />
        </span>
      </form>
    );
  }
}

AddItem.propTypes = {
  addItemHandler: PropTypes.func,
  list: PropTypes.shape({
    id: PropTypes.number
  })
};

AddItem.defaultProps = {
  addItemHandler: () => null
};

export default AddItem;
