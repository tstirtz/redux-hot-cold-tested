import React from 'react';
import { shallow, mount } from 'enzyme';

import {Feedback} from './feedback';

describe('<Feeback />', () => {
    it('Should render without crashing', () =>{
        shallow(<Feedback />);
    });

    // it('Should render some feedback', () => {
    //     let guessCount = 4;
    //     let testFeedback = "This is a test";
    //     let wrapper = shallow(<Feedback guessCount={guessCount} feedback={testFeedback} />);
    //
    //     expect(wrapper.props()).toEqual(guessCount);
    // });
});
