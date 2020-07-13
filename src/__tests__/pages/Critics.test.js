import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import Critics from '../../pages/Critics';

describe('Critics page', () => {
  it('should render without crashing', () => {
    let middlewares;
    let mockStore;
    let initialState;
    let store;
    let wrapper;

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      critics: {
        loading: true,
        critics: [],
      },
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[{ pathname: '/critics', key: 'testKey' }]}
        >
          <Critics />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      critics: {
        loading: false,
        critics: [],
      },
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[{ pathname: '/critics', key: 'testKey' }]}
        >
          <Critics />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      critics: {
        loading: false,
        critics: [
          {
            multimedia: { resource: { src: '#' } },
            display_name: 'name',
            bio: 'description',
          },
        ],
      },
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[{ pathname: '/critics', key: 'testKey' }]}
        >
          <Critics />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      critics: {
        loading: false,
        critics: [
          {
            multimedia: null,
            display_name: 'name 2',
            bio: 'description',
          },
        ],
      },
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[{ pathname: '/critics', key: 'testKey' }]}
        >
          <Critics />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
