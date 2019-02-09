import React from 'react';
import { shallow } from 'enzyme';
import GroceryList from './GroceryList'
import Item from './Item'

describe('GroceryList', () => {
  it('renders an empty list of items', () => {
    const wrapper = shallow(<GroceryList list={ { id: 1, items: [] } } />);
    expect(wrapper.find('.groceryList ul').text()).toEqual('')
  })

  it('renders a list of items', () => {
    const wrapper = shallow(<GroceryList list={ { id: 1, items: [{name:'Milk', quantity: 1}, {name: 'Bread', quantity:2}] } } />);
    expect(wrapper.find(Item).length).toEqual(2)
  })
})