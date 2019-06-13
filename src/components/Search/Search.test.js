import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

import Search from './Search';

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

});
