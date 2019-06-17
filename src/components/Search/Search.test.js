import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

import Search from './Search';
import App from '../App/App';

describe('about Search', () => {
  let wrapper;

  describe('about rendering', () => {
    beforeEach(() => {
      wrapper = shallow(<Search />)
    });

    it('should render component without crashing', () => {
      expect(wrapper.length).toBe(1);
    });

    it('matches snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('calls onSubmit when the form is submitted', () => {
    const onSubmitFn = jest.fn();
    wrapper = mount(<Search handleSubmit={onSubmitFn} />);

    const form = wrapper.find('form');
    form.simulate('submit');
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });

  it('should change the state of value when the user enters a search term', () => {
    wrapper = mount(<App />);
    const searchInput = wrapper.find('input').at(0);

    expect(wrapper.state().value).toBe('');
    searchInput.simulate('change', { target: { value: 'some search term' } });
    expect(wrapper.state().value).toBe('some search term');
  });
});
