import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[1, 2, 3]} />);
  });

  it('Renders the guesses in list format', () => {
    const guess = 3;
    const guesses = [1, 2, 3];
    const wrapper = shallow(<GuessList guess={guess} guesses={guesses}/>);
    expect(wrapper.contains(<li key={0}>{guess}</li>)).toEqual(true);
  })
});
