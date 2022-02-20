import React from 'react';
import {shallow} from 'enzyme';
import About from "../About";

describe('About page', () => {

    it('should render correctly', () => {
        const component = shallow( <About/> );
        expect(component).toMatchSnapshot();
    });
});
