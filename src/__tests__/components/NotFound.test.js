import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../components/NotFound';

describe('NotFound component', () => {
  it('should render without crashing', () => {
    const props = {
      Code: 404,
      Message: 'Page not found',
    };
    const wrapper = shallow(<NotFound {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
