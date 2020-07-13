import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import Reviews from '../../pages/Reviews';

describe('Reviews page', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    reviews: {
      initialLoading: false,
      loadingMore: false,
      searchCounter: 0,
      filters: {
        order: '',
        query: '',
        reviewer: '',
        criticsPick: '',
      },
      reviews: [],
      hasMore: false,
      hasError: false,
    },
  };
  const store = mockStore(initialState);

  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[{ pathname: '/reviews', key: 'testKey' }]}
        >
          <Reviews />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
