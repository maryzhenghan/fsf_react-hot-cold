import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders the aural status', () => {
    const auralStatus = "Here's the status of the game right now: Please enter a valid number You've made 0 guesses.";
    const wrapper = shallow(<AuralStatus auralStatus={auralStatus} />);
    expect (wrapper.text()).toEqual(auralStatus);
  })
});
