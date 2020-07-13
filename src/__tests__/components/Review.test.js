import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Review from '../../components/Review';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../store/modules/favorites/actions';

describe('Review component', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    favorites: [
      {
        display_title: 'title',
        byline: 'criticName',
      },
    ],
  };
  const store = mockStore(initialState);

  it('should render without crashing', () => {
    let props;
    let wrapper;
    let actions;
    let expectedPayload;

    props = {
      rawData: {
        display_title: 'title',
        summary_short: 'description',
        publication_date: '01-01-2020',
        multimedia: { src: '#' },
        link: { url: '#' },
        byline: 'criticName',
        critics_pick: 1,
      },
    };
    wrapper = mount(
      <Provider store={store}>
        <Review {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find('.handleFavoritesButton')
      .first()
      .simulate('click');
    actions = store.getActions();
    expectedPayload = removeFromFavorites(
      props.rawData.display_title,
      props.rawData.byline
    );
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();

    props = {
      rawData: {
        display_title: 'title 2',
        summary_short: 'description',
        publication_date: '01-01-2020',
        multimedia: null,
        link: { url: '#' },
        byline: 'criticName',
        critics_pick: 0,
      },
    };
    wrapper = mount(
      <Provider store={store}>
        <Review {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find('.handleFavoritesButton')
      .first()
      .simulate('click');
    actions = store.getActions();
    expectedPayload = addToFavorites(props.rawData);
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();
  });
});
