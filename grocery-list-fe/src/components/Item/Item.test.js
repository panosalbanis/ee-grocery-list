import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item', () => {
  it('renders the name and the quantity', () => {
    const wrapper = shallow(<Item name={'Milk'} quantity={1} />);
    expect(wrapper.find('.name').text()).toEqual('Milk');
    expect(wrapper.find('.quantity').text()).toEqual('1');
  });
});
