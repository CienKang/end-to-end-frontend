import React from 'react';
import { DELETE_A_CONTENT } from '../../constants/apiEndpoints';
import { backendType, ContentStorageInstancesProps } from '../../types';
import { makeRequestToBackend } from '../../utils/makeRequest/makeRequest';
import './ContentStorageInstances.css';
const ContentStorageInstances = (props:ContentStorageInstancesProps) => {

    const handleNewEntryClick = () => {
        props.setShowModalForm(true);
    };

    const handleDeleteEntryClick = (typeId:string,id:string) => {
        makeRequestToBackend({...DELETE_A_CONTENT(typeId)},{data:{id:id}}).then(
            ()=>{
                props.setContentStorage(props.contentStorage.filter((content:backendType)=>content.id.toString() != id));
            }
        );
    };

    const handleEditEntryClick = () => {
        props.setShowModalForm(true);
    };
    return (
        <div className='main-split-screen-2'>
            <div className='main-body-header'>
                <h2>{props.contentStorage.length} Entries Found</h2>
                <span onClick={handleNewEntryClick}>Add a new Entry</span>
            </div>
            <div className='main-body'>
                <div className='main-body-data'>
                    <div className='main-body-data-id'>
                        <p>ID</p>
                    </div>
                    <div className='main-body-data-fields'>
                        {
                            (props.contentStorage.length > 0) &&
                            Object.keys(props.contentStorage[0].data).map((key,idx) => {
                                if(idx < 3){
                                    return (
                                        <p key={idx}>{key}</p>
                                    );
                                }
                            })
                        }
                    

                        <div className='main-body-data-actions'>
                            <p>Actions</p>
                        </div>
                    </div>
                </div>
                {
                    props.contentStorage.map((contentType:backendType,idx) => {
                        return (
                            <div key={idx} className='main-body-data'>
                                <div className='main-body-data-id'>
                                    <p>{idx}</p>
                                </div>
                                <div className='main-body-data-fields'>
                                    {

                                        Object.keys(contentType.data).map((key,idx) => {
                                            if(idx < 3){
                                                return (
                                                    <p key={idx}>{contentType.data[key]}</p>
                                                );
                                            }
                                        })

                                    }
                                    <div className='main-body-data-actions'>
                                        <img src='/assets/user-edit-text-message-note@2x.png' onClick={handleEditEntryClick} />
                                        <img src='/assets/trash-delete-recycle-bin-bucket-waste@2x.png' onClick={()=>handleDeleteEntryClick(contentType.typeId.toString(),contentType.id.toString())}  />
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                
            </div>
        </div>
    );
};
 
export default ContentStorageInstances;