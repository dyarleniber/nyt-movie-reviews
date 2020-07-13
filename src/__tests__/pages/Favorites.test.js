import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Favorites from '../../pages/Favorites';

describe('Favorites page', () => {
  it('should render without crashing', () => {
    let middlewares;
    let mockStore;
    let initialState;
    let store;
    let wrapper;

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      favorites: [],
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      favorites: [
        {
          display_title: 'title',
          summary_short: 'description',
          publication_date: '01-01-2020',
          multimedia: { src: '#' },
          link: { url: '#' },
          byline: 'criticName',
          critics_pick: 1,
        },
      ],
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
