import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Review from '../../components/Review';

describe('Review component', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    favorites: [],
  };
  const store = mockStore(initialState);

  it('should render without crashing', () => {
    const props = {
      rawData: {
        display_title: 'title',
        summary_short: 'description',
        publication_date: '01-01-2020',
        multimedia: null,
        link: { url: '#' },
        byline: 'criticName',
        critics_pick: 0,
      },
    };
    const wrapper = mount(
      <Provider store={store}>
        <Review {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
