import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
    });

    it('should match with previous snapshot', () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });

});