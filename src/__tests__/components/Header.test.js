import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Header from '../../components/Header';

describe('Header component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
