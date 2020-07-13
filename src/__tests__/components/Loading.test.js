import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../components/Loading';

describe('Loading component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
