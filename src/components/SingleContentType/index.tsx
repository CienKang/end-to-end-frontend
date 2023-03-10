import React from 'react';
import { SingleContentTypeProps } from '../../types';
import './SingleContentType.css';
const SingleContentType = (props:SingleContentTypeProps) => {

    const handleNewFieldClick = () => {
        props.setShowModal(!props.showModal);
        props.setModalFor('Field');
    };


    return ( 
        <div className='content-fields-container'>
            <div className='content-fields-header'>
                <div className='content-fields-name'>
                    <h1>{props.contentTypeSelected2.typeName} </h1>
                    <img src='/assets/user-pencil-write-ui-education@2x.png' />
                </div>
                <p>{props.contentTypeSelected2.fields.length} fields</p>
            </div>
            <div className='content-fields-list'>
                <span className='add-new-field-btn' onClick={handleNewFieldClick}>Add another field</span>
                <div className='content-field-container'>
                    {
                        props.contentTypeSelected2.fields.map((content, index) => {
                            return(
                                <div  key={index} className='content-field'>
                                    <div className='content-field-icon'>
                                        <p>Ab</p>
                                    </div>
                                    <div className='content-field-name'>
                                        <span>{content}</span>
                                        <span>Text</span>
                                        <div className='content-field-options'>
                                            <img src='/assets/user-edit-text-message-note@2x.png' />
                                            <img src='/assets/trash-delete-recycle-bin-bucket-waste@2x.png' />
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }


                </div>
            </div>
        </div>
        
    );
};
 
export default SingleContentType;