import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Critics from '../../pages/Critics';

describe('Critics page', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    critics: {
      loading: false,
      critics: [],
    },
  };
  const store = mockStore(initialState);

  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Critics />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
