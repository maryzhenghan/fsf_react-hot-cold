import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection guesses={[1, 2, 3]}/>);
  });

  // KEEP GOING ON THIS LATER
  // it('Renders a section for the components', () => {
  //   const wrapper = shallow(<StatusSection guessCount={4} />);
  //   expect(wrapper.contains(<section></section>));
  // });
});
