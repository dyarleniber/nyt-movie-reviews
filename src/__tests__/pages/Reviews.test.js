import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import Reviews from '../../pages/Reviews';
import { searchReviewsRequest } from '../../store/modules/reviews/actions';

describe('Reviews page', () => {
  it('should render without crashing', () => {
    let middlewares;
    let mockStore;
    let initialState;
    let store;
    let wrapper;
    let actions;
    let expectedPayload;

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      favorites: [],
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
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[{ pathname: '/reviews', key: 'testKey' }]}
        >
          <Reviews />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      favorites: [],
      reviews: {
        initialLoading: true,
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
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[{ pathname: '/reviews', key: 'testKey' }]}
        >
          <Reviews />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      favorites: [],
      reviews: {
        initialLoading: false,
        loadingMore: true,
        searchCounter: 0,
        filters: {
          order: '',
          query: '',
          reviewer: '',
          criticsPick: '',
        },
        reviews: [
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
        hasMore: false,
        hasError: false,
      },
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[{ pathname: '/reviews', key: 'testKey' }]}
        >
          <Reviews />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      favorites: [],
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
        reviews: [
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
        hasMore: false,
        hasError: false,
      },
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[{ pathname: '/reviews', key: 'testKey' }]}
        >
          <Reviews />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    actions = store.getActions();
    expectedPayload = searchReviewsRequest(initialState.reviews.filters);
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();
    const newFilter = {
      order: 'by-title',
      query: 'title',
      reviewer: 'criticName',
      criticsPick: true,
    };
    wrapper
      .find('[id="order-input"]')
      .first()
      .simulate('change', {
        preventDefault: jest.fn(),
        target: { name: 'order', value: newFilter.order },
      });
    wrapper
      .find('[id="query-input"]')
      .first()
      .simulate('change', {
        preventDefault: jest.fn(),
        target: { name: 'query', value: newFilter.query },
      });
    wrapper
      .find('[id="reviewer-input"]')
      .first()
      .simulate('change', {
        preventDefault: jest.fn(),
        target: { name: 'reviewer', value: newFilter.reviewer },
      });
    wrapper
      .find('[id="critics-pick-input"]')
      .first()
      .simulate('change', {
        preventDefault: jest.fn(),
        target: {
          name: 'criticsPick',
          value: newFilter.criticsPick,
          checked: true,
        },
      });
    wrapper
      .find('[id="filter-form"]')
      .first()
      .simulate('submit', { preventDefault: jest.fn() });
    actions = store.getActions();
    expectedPayload = searchReviewsRequest(newFilter);
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();
  });
});
