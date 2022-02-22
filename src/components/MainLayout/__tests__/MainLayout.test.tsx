import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '../MainLayout';

describe('MainLayout', () => {
    it('should render correctly', () => {
        const component = shallow(<MainLayout/>);
        expect(component).toMatchSnapshot();
    });
    it('should render Header Outlet and Footer', () => {
        const component = shallow(<MainLayout/>);
        expect(component.find('Header').exists()).toBe(true);
        expect(component.find('Outlet').exists()).toBe(true);
    });
});
