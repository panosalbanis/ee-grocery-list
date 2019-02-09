import React from 'react';
import { shallow } from 'enzyme';
import AddGroceryList from './AddGroceryList'

describe('AddGroceryList', () => {
  it('renders a button that will create a new grocery list', () => {
    const wrapper = shallow(<AddGroceryList />);
    expect(wrapper.find('button').text()).toEqual('Add Grocery List')
  })
  it('clicking the `Add Grocery List` button, runs the handler function', () => {
    const handleClickSpy = jest.fn();
    const wrapper = shallow(<AddGroceryList handleClick={handleClickSpy}/>);
    wrapper.find('button').simulate('click');
    expect(handleClickSpy).toHaveBeenCalledTimes(1)
    
  })
})