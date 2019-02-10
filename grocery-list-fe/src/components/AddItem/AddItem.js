import React, { Component } from 'react';
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
    this.handleClick = this.handleClick.bind(this);
  }

  nameChangeHandler(event) {
    event.persist();
    this.setState({ name: event.target.value });
  }

  quantityChangeHandler(event) {
    event.persist();
    this.setState({ quantity: event.target.value });
  }

  handleClick(listId, addItemHandler) {
    addItemHandler(listId, this.state.name, parseInt(this.state.quantity));
    this.setState({
      name: '',
      quantity: ''
    });
  }

  render() {
    const { addItemHandler, list } = this.props;
    return (
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
        <div
          className="button"
          onClick={() => this.handleClick(list.id, addItemHandler)}
        >
          Add Item
        </div>
      </span>
    );
  }
}

export default AddItem;
