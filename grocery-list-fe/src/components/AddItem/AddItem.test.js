import React from 'react';
import { shallow } from 'enzyme';
import AddItem from './AddItem';

describe('AddItem', () => {
  it('renders a form that will add a new item', () => {
    const wrapper = shallow(<AddItem />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('renders an input for the name', () => {
    const wrapper = shallow(<AddItem />);
    expect(wrapper.find('form input[name="name"]').length).toEqual(1);
  });

  it('renders an input for the quantity', () => {
    const wrapper = shallow(<AddItem />);
    expect(wrapper.find('form input[name="quantity"]').length).toEqual(1);
  });

  it('renders a button to add the item', () => {
    const wrapper = shallow(<AddItem />);
    expect(wrapper.find('form input.button[value="Add Item"]').length).toEqual(
      1
    );
  });

  it('submitting the form, calls the add button handler', () => {
    const addItemHandlerSpy = jest.fn();
    const preventDefaultSpy = jest.fn();
    const wrapper = shallow(
      <AddItem addItemHandler={addItemHandlerSpy} list={{ id: 1 }} />
    );
    wrapper.setState({ name: 'milk', quantity: 1 });
    wrapper
      .find('form')
      .simulate('submit', { preventDefault: preventDefaultSpy });
    expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    expect(addItemHandlerSpy).toHaveBeenCalledTimes(1);
    expect(addItemHandlerSpy).toHaveBeenCalledWith(1, 'milk', 1);
  });
});
