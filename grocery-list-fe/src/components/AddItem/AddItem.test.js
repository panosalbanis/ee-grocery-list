import React from 'react';
import { shallow } from 'enzyme';
import AddItem from './AddItem';

describe('AddItem', () => {
  it('renders an input for the name', () => {
    const wrapper = shallow(<AddItem />);
    expect(wrapper.find('input[name="name"]').length).toEqual(1);
  });

  it('renders an input for the quantity', () => {
    const wrapper = shallow(<AddItem />);
    expect(wrapper.find('input[name="quantity"]').length).toEqual(1);
  });

  it('renders a button to add the item', () => {
    const wrapper = shallow(<AddItem />);
    expect(wrapper.find('button').text()).toEqual('Add Item');
  });

  it('clicking the `Add item` button, calls the add button handler', () => {
    const addItemHandlerSpy = jest.fn();
    const wrapper = shallow(
      <AddItem addItemHandler={addItemHandlerSpy} list={{ id: 1 }} />
    );
    wrapper.setState({ name: 'milk', quantity: 1 });
    wrapper.find('button').simulate('click');
    expect(addItemHandlerSpy).toHaveBeenCalledTimes(1);
    expect(addItemHandlerSpy).toHaveBeenCalledWith(1, 'milk', 1);
  });
});
