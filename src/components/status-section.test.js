import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection guesses={[1, 2, 3]}/>);
  });

  it('Renders a section for the components', () => {
    const guesses = [1, 2, 3];
    const guessCount = 3;
    const wrapper = shallow(<StatusSection guessCount={guessCount} guesses={guesses} />);
    expect(wrapper.contains(<section></section>));
  });
});
