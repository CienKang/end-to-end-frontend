import React from 'react';
import { CREATE_A_NEW_CONTENT, GET_ALL_CONTENTS_FOR_CONTENT_TYPE } from '../../constants/apiEndpoints';
import { FormModalProps } from '../../types';
import { makeRequestToBackend } from '../../utils/makeRequest/makeRequest';
import './FormModal.css';

const FormModal = (props: FormModalProps) => {
    const [formValues, setFormValues] = React.useState<{ [key: string]: string }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        });

        console.log(formValues);
    };


    const handleAddClick = () => {
        makeRequestToBackend({ ...CREATE_A_NEW_CONTENT(props.contentTypeSelected.id) }, {
            data: {
                data: {
                    ...formValues
                }
            }
        }).then(() => {
            props.setShowModalForm(false);
            makeRequestToBackend({ ...GET_ALL_CONTENTS_FOR_CONTENT_TYPE(props.contentTypeSelected.id) }).then((response) => {
                props.setContentStorage(response);
            });
        });

    };


    const handleCancelClick = () => {
        props.setShowModalForm(false);
    };



    return (
        <div className='form-modal'>
            <div className='form-modal-content'>
                <div className='form-modal-header'>
                    <h1>{props.contentTypeSelected.typeName} </h1>
                </div>
                <div className='form-modal-body'>

                    {props.contentTypeSelected.fields.map((field) => {
                        return (
                            <div className='combined-input form-combined-input' key={field}>
                                <span>{field}</span>
                                <input type='text' name={field} onChange={handleInputChange} />
                            </div>
                        );
                    })
                    }

                </div>
                <div className='combined-btns form-combined-btns'>
                    <span onClick={handleCancelClick} >Cancel</span>
                    <button onClick={handleAddClick}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default FormModal;