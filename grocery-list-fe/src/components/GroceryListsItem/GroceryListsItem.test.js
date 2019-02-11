import React from 'react';
import { shallow } from 'enzyme';
import GroceryListsItem from './GroceryListsItem';

describe('GroceryListsItem', () => {
  it('renders an input for the name', () => {
    const wrapper = shallow(<GroceryListsItem listId={1} />);
    expect(wrapper.find('div.button').text()).toEqual('List 1');
  });
});
