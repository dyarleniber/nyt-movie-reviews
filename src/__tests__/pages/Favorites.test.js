import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Favorites from '../../pages/Favorites';

describe('Favorites page', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    favorites: [],
  };
  const store = mockStore(initialState);

  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
