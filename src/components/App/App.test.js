import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import App from './App';

describe('about App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />)
  });

  it('should render component without crashing', () => {
    expect(app.length).toBe(1);
  });

  it('matches snapshot', () => {
    expect(toJson(app)).toMatchSnapshot();
  });

});
