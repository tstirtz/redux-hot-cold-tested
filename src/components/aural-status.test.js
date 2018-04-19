import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  // it('Renders an aural status update', () => {
  //   let dispatch = jest.fn();
  //   let wrapper = shallow(<AuralStatus dispatch={dispatch}/>);
  //
  //   wrapper.instance().
  //   expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  // });
});
