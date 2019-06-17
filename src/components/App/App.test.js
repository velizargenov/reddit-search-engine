import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

import App from './App';
import request from './__mocks__/request';

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

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

  it("should make one request to the endpoint", async () => {
    fetch = mockFetch(request);
    const appComponent = mount(<App />);

    await appComponent.instance().retrieveData('aww');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
