import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Item.css'

class Item extends Component {
  render() {
    const { name, quantity } = this.props
    return (
      <li>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
      </li>
    )
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Item;