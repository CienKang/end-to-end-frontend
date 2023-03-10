import React, { useState } from 'react';
import { CREATE_NEW_CONTENT_TYPE, CREATE_NEW_FIELD_FOR_CONTENT_TYPE, RENAME_CONTENT_TYPE } from '../../constants/apiEndpoints';
import { ContentType, SingleModalProps } from '../../types';
import { makeRequestToBackend } from '../../utils/makeRequest/makeRequest';
import './SingleModal.css';

const SingleModal = (props: SingleModalProps) => {

    const [input, setInput] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        console.log(input);
    };


    const handleCancel = () => {
        props.setShowModal(!props.showModal);
    };

    const handleCreateClickType = () => {
        makeRequestToBackend({ ...CREATE_NEW_CONTENT_TYPE }, { data: { typeName: input } }).then(() => {
            props.setShowModal(!props.showModal);
            window.location.reload();
        }
        );
    };

    const handleCreateClickField = () => {
        makeRequestToBackend({ ...CREATE_NEW_FIELD_FOR_CONTENT_TYPE(props.contentTypeSelected2.typeName) }, { data: { field: input } }).then(() => {
            props.setShowModal(!props.showModal);
            props.setContentTypeSelected2({
                ...props.contentTypeSelected2,
                fields: [...props.contentTypeSelected2.fields, input]
            });
        });
    };

    const handleCreateClickRename = () => {
        makeRequestToBackend({...RENAME_CONTENT_TYPE(props.contentTypeSelected2.typeName)},{data: {newTypeName: input}}).then(() => {
            props.setShowModal(!props.showModal);
            
            props.setContentTypes(props.contentTypes.map((contentType:ContentType) => {
                if(contentType.typeName == props.contentTypeSelected2.typeName){
                    return {
                        ...contentType,
                        typeName: input
                    };
                }
                return contentType;
            }));

            
            props.setContentTypeSelected2({
                ...props.contentTypeSelected2,
                typeName: input
            });
        });
              
    };
    return (
        <div className='single-modal'>
            <div className='single-modal-content'>
                <div className='single-modal-header'>
                    { props.modalFor !='Rename' && <h3>Create a new {props.modalFor}</h3> }
                    { props.modalFor =='Rename' && <h3>Rename {props.contentTypeSelected2.typeName}</h3> }
                </div>
                <div className='single-modal-body'>
                    <div className='combined-input'>
                        {props.modalFor !='Rename' &&  <span>Name of {props.modalFor.toLowerCase()}</span>}
                        {props.modalFor =='Rename' &&  <span>New name of {props.contentTypeSelected2.typeName}</span>}
                        <input type='text' data-testid='input-single-modal' onChange={handleInputChange} />
                    </div>

                    <div className='combined-btns'>
                        <span onClick={handleCancel}>Cancel</span>
                        {props.modalFor == 'Content Type' && <button onClick={handleCreateClickType}>Create</button>}
                        {props.modalFor == 'Field' && <button onClick={handleCreateClickField}>Create</button>}
                        {props.modalFor == 'Rename' && <button onClick={handleCreateClickRename}>Rename</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleModal;