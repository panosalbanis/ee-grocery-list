import React from 'react';
import { shallow } from 'enzyme';
import GroceryLists from './GroceryLists';
import GroceryListsItem from '../GroceryListsItem/GroceryListsItem';

describe('GroceryLists', () => {
  it('renders an empty list of groceryLists', () => {
    const wrapper = shallow(<GroceryLists lists={[]} />);
    expect(wrapper.find('ul.groceryListsList').text()).toEqual('');
  });

  it('renders a list of groceryLists', () => {
    const wrapper = shallow(<GroceryLists lists={[{ id: 1, items: [] }]} />);
    expect(wrapper.find(GroceryListsItem).length).toEqual(1);
  });
});
