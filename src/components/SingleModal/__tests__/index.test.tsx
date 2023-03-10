import SingleModal from '..';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';

const props = {
    modalFor: 'Content Type',
    setShowModal: jest.fn(),
    showModal: true,
    contentTypeSelected2: {},
    setContentTypeSelected2: jest.fn(),
    contentTypes: [],
    setContentTypes: jest.fn(),
};


describe('SingleModal', () => {
    it('renders without crashing', () => {
        render(<SingleModal
            modalFor='Content Type'
            setShowModal={jest.fn()}
            showModal={true}
            contentTypeSelected2={{ typeName: 'test', fields: [], id: '1' }}
            setContentTypeSelected2={jest.fn()}
            contentTypes={[]}
            setContentTypes={jest.fn()}
        />);
    });

    it('should match with previous snapshot', () => {
        const { asFragment } = render(<SingleModal
            modalFor='Content Type'
            setShowModal={jest.fn()}
            showModal={true}
            contentTypeSelected2={{ typeName: 'test', fields: [], id: '1' }}
            setContentTypeSelected2={jest.fn()}
            contentTypes={[]}
            setContentTypes={jest.fn()}
        />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should change the input value when new input is being typed', () => {
        const { getByTestId } = render(<SingleModal
            modalFor='Content Type'
            setShowModal={jest.fn()}
            showModal={true}
            contentTypeSelected2={{ typeName: 'test', fields: [], id: '1' }}
            setContentTypeSelected2={jest.fn()}
            contentTypes={[]}
            setContentTypes={jest.fn()}
        />);
        const input = getByTestId('input-single-modal');
        expect(input).toHaveValue('');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input).toHaveValue('test');
    });

    it('should call setShowModal and close single modal when cancel button is clicked', () => {

        const screen = render(<SingleModal
            modalFor='Content Type'
            setShowModal={jest.fn()}
            showModal={true}
            contentTypeSelected2={{ typeName: 'test', fields: [], id: '1' }}
            setContentTypeSelected2={jest.fn()}
            contentTypes={[]}
            setContentTypes={jest.fn()}
        />);
        const cancelButton = screen.getByText(/cancel/i);
        fireEvent.click(cancelButton);
        expect(props.setShowModal).toHaveBeenCalled();

    });

});