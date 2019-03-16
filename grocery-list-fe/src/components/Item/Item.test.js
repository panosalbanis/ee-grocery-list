import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item', () => {
  it('renders the name and the quantity', () => {
    const wrapper = shallow(<Item name={'Milk'} quantity={1} />);
    expect(wrapper.find('.name').text()).toEqual('Milk');
    expect(wrapper.find('.quantity').text()).toEqual('1');
  });

  it('renders a delete button', () => {
    const wrapper = shallow(<Item name={'Milk'} quantity={1} />);
    expect(wrapper.find('.deleteButton').length).toEqual(1);
  });

  it('calls the handler function when the `delete` button is pressed', () => {
    const deleteHandlerSpy = jest.fn();
    const wrapper = shallow(
      <Item name={'Milk'} quantity={1} onDeleteHandler={deleteHandlerSpy} />
    );
    wrapper.find('.deleteButton').simulate('click');
    expect(deleteHandlerSpy).toHaveBeenCalledTimes(1);
  });
});
