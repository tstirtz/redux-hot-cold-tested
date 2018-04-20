import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should render plural guessNoun', () => {
        const guessCount = 2;
        const wrapper = shallow(<GuessCount guessCount={guessCount}/>);

        expect(wrapper.find('h2').text()).toContain('guesses');
    });

    it('Should render singular guessNoun', () => {
        const guessCount = 1;
        const wrapper = shallow(<GuessCount guessCount={guessCount}/>);

        expect(wrapper.find('h2').text()).toEqual("You've made 1 guess!");
    });
});
