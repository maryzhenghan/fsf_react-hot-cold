import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () =>{
    shallow(<GuessCount />);
  });

  it('Renders the text', () => {
    const text = "You've made 3 guesses!";
    const wrapper = shallow(<GuessCount guessCount={3} text={text} />);
    expect(wrapper.text()).toEqual(text);
  })
});
