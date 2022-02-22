import ErrorBoundary from '../ErrorBoundary';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

describe('Error Boundary', () => {
    test('Error Boundary', () => {
        const ThrowError = () => {
            throw new Error('Test');
        };
        const wrapper = mount(
            <ErrorBoundary >
                <ThrowError />
            </ErrorBoundary>
        );
        expect(wrapper.find('h1').text()).toEqual('Что-то пошло не так.');
    });
});
