import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessCount />);
    });
});
