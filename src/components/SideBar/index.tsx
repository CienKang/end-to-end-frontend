import React from 'react';
import { ContentType, SideBarProps } from '../../types';
import './SideBar.css';

const SideBar = (props: SideBarProps) => {

    const handleListItemClick = (contentType:ContentType) => {
        props.setContentTypeSelected(contentType);
        props.setContentBuilderSelected(false);
    };

    return ( 
        <div className='side-bar'>
            <header>
                CMS+
            </header>
            <div className='side-bar-content'>
                <div className='colllection-header'>
                    <h3>COLLECTION TYPES</h3>
                    <img src='/assets/icon-search-dark@2x.png' alt='search' />
                </div>
                <div className='collection'>
                    <ul className='collection-list'>
                        {props.contentTypes.map((contentType, index) => {
                            return (
                                <span key={index} className={`${props.contentTypeSelected.typeName == contentType.typeName && 'highlight'}`}>

                                    <div className='collection-item ' onClick={()=>handleListItemClick(contentType)}>
                                       ⏺ {contentType.typeName}
                                    </div>
                                </span>
                            );
                        })
                        }
                    </ul>
                </div>
                <div className={`builder ${props.contentBuilderSelected && 'highlight'}`} >
                    <h3>CONTENT TYPE BUILDER</h3>
                </div>
            </div>
        </div>
        
    );
};
 
export default SideBar;