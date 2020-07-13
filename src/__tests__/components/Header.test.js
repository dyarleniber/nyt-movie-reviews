import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

describe('Header component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
