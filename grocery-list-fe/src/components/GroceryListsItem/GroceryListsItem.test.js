import React from 'react';
import { shallow } from 'enzyme';
import GroceryListsItem from './GroceryListsItem';

describe('GroceryListsItem', () => {
  it('renders li element for the given list', () => {
    const wrapper = shallow(<GroceryListsItem listId={1} />);
    expect(wrapper.find('li div.button').text()).toEqual('List 1');
  });

  it('clicking on an item, calls the handler function', () => {
    const handlerSpy = jest.fn();
    const wrapper = shallow(
      <GroceryListsItem listId={1} clickHandler={handlerSpy} />
    );
    wrapper.find('li div.button').simulate('click');
    expect(handlerSpy).toHaveBeenCalledTimes(1);
    expect(handlerSpy).toHaveBeenCalledWith(1);
  });
});
