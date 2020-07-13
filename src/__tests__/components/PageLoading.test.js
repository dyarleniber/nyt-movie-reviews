import React from 'react';
import { shallow } from 'enzyme';

import PageLoading from '../../components/PageLoading';

describe('PageLoading component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PageLoading />);
    expect(wrapper).toMatchSnapshot();
  });
});
