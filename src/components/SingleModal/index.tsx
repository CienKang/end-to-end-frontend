import React ,{useState} from 'react';
import { CREATE_NEW_CONTENT_TYPE, CREATE_NEW_FIELD_FOR_CONTENT_TYPE } from '../../constants/apiEndpoints';
import { SingleModalProps } from '../../types';
import { makeRequestToBackend } from '../../utils/makeRequest/makeRequest';
import './SingleModal.css';

const SingleModal = (props:SingleModalProps) => {

    const [input, setInput] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        console.log(input);
    };


    const handleCancel = () => {
        props.setShowModal(!props.showModal);
    };

    const handleCreateClickType = () => {
        makeRequestToBackend({...CREATE_NEW_CONTENT_TYPE},{data: {typeName: input}}).then(() => {
            props.setShowModal(!props.showModal);
            window.location.reload();
        }
        );
    };

    const handleCreateClickField = () =>
    {
        makeRequestToBackend({...CREATE_NEW_FIELD_FOR_CONTENT_TYPE(props.contentTypeSelected2.typeName)},{data: {field: input}}).then(()=> {
            props.setShowModal(!props.showModal);
            // window.location.reload();
            props.setContentTypeSelected2({
                ...props.contentTypeSelected2,
                fields: [...props.contentTypeSelected2.fields, input]
            });
        });
    };

    return (
        <div className='single-modal'>
            <div className='single-modal-content'>
                <div className='single-modal-header'>
                    <h3>Create a new {props.modalFor}</h3>
                </div>
                <div className='single-modal-body'>
                    <div className='combined-input'>
                        <span>Name of {props.modalFor.toLowerCase()}</span>
                        <input type='text' onChange={handleInputChange} />
                    </div>

                    <div className='combined-btns'>
                        <span onClick={handleCancel}>Cancel</span>
                        <button onClick={props.modalFor == 'Content Type' ? handleCreateClickType : handleCreateClickField}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleModal;