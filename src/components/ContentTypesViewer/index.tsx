import React , {useEffect, useState} from 'react';
import { GET_ALL_CONTENTS_FOR_CONTENT_TYPE } from '../../constants/apiEndpoints';
import { ContentType, ContentTypesViewerProps } from '../../types';
import { makeRequestToBackend } from '../../utils/makeRequest/makeRequest';
import './ContentTypesViewer.css';

const ContentTypeViewer = (props:ContentTypesViewerProps) => { 
    const [eachContentLength, setEachContentLength] = useState<number[]>([]);

    const handleAddNewContentType = () => {
        props.setShowModal(!props.showModal);
    };

    const handleContentTypeClick = (contentType: ContentType) => {
        props.setContentTypeSelected2(contentType);
    };


    useEffect(() => {
        props.setSingleContentTypeData(props.contentTypeSelected2.fields);
        for(let idx = 0; idx < props.contentTypes.length; idx++){
            makeRequestToBackend({...GET_ALL_CONTENTS_FOR_CONTENT_TYPE(props.contentTypes[idx].id)}).then(data => {
                setEachContentLength((prevState) => [...prevState, data.length]);
            });
        }
         
    }, [props.contentTypes]);


    return ( 
        <div className='content-type-container'>
            <div className='content-type-header'>
                <h2>
                    {props.contentTypes.length} Types 
                </h2> 
                <img src='/assets/icon-search-dark@2x.png' alt='search' />
            </div>
            <div className='content-type-list'>
                <span className='add-new-btn' onClick={handleAddNewContentType}>+ New Type</span>
                {
                    props.contentTypes.map((contentType, index) => {
                        return (
                            
                            <span key={index} className={`content-type-btn 
                            ${props.contentTypeSelected2.typeName == contentType.typeName && 'select-highlight' }`}
                            onClick={()=>handleContentTypeClick(contentType)}
                            >
                                <span>
                                    {contentType.typeName}
                                </span>
                                <span>{eachContentLength[index]}</span>
                            </span>
                        );
                    })
                }
            </div>
        </div>
        
    );
};
 
export default ContentTypeViewer;