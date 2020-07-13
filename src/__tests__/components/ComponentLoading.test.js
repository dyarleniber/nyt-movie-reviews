import React from 'react';
import { shallow } from 'enzyme';

import ComponentLoading from '../../components/ComponentLoading';

describe('ComponentLoading component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ComponentLoading />);
    expect(wrapper).toMatchSnapshot();
  });
});
