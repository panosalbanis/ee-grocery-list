import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import GroceryLists from './components/GroceryLists/GroceryLists'
import AddGroceryList from './components/AddGroceryList/AddGroceryList'
import GroceryList from './components/GroceryList/GroceryList'

describe('App', () => {
  it('renders renders a list of GroceryLists', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(GroceryLists).length).toBe(1)
  });

  it('renders renders a list of AddGroceryList', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(AddGroceryList).length).toBe(1)
  });

  it('renders renders a list of GroceryList', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(GroceryList).length).toBe(1)
  });
})
