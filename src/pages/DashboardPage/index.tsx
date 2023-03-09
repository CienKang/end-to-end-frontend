import React, { useEffect ,useState} from 'react';
import { SideBar, SingleContentType } from '../../components';
import ContentTypeViewer from '../../components/ContentTypesViewer';
import { GET_ALL_CONTENT_TYPES } from '../../constants/apiEndpoints';
import { ContentType } from '../../types';
import { makeRequestToBackend } from '../../utils/makeRequest/makeRequest';
import './DashboardPage.css';

const DashboardPage = () => {
    
    const [contentTypes, setContentTypes] = useState<ContentType[]>([]);
    const [contentTypeSelected,setContentTypeSelected] = useState<ContentType>({
        typeName: '',
        fields: [],
        id: ''
    });
    const [contentTypeSelected2,setContentTypeSelected2] = useState<ContentType>({
        typeName: '',
        fields: [],
        id: ''
    });


    const [singleContentTypeData, setSingleContentTypeData] = useState<string[]>([]);

    const [contentBuilderSelected, setContentBuilderSelected] = useState<boolean>(true);

    useEffect(() => {
        makeRequestToBackend({...GET_ALL_CONTENT_TYPES},{}).then(data =>{
            data.forEach((contentType: ContentType) => {
                setContentTypes((prevState) => [...prevState, contentType]);
            });
        });

    }, []);

    return ( 
        <div className='dashboard-page'>
            <div className='sidebar'>
                <SideBar 
                    contentTypes={contentTypes}
                    contentTypeSelected={contentTypeSelected}
                    setContentTypeSelected={setContentTypeSelected}
                    contentBuilderSelected={contentBuilderSelected}
                    setContentBuilderSelected={setContentBuilderSelected}
                />
            </div>
            <div className='main-bar'>
                <header>
                    Content Types
                </header>
                <div className='main-split-screen'>
                    <div className='first-split'>
                        <ContentTypeViewer 
                            contentTypes={contentTypes} 
                            contentTypeSelected2={contentTypeSelected2}
                            setContentTypeSelected2={setContentTypeSelected2}
                            singleContentTypeData={singleContentTypeData}
                            setSingleContentTypeData={setSingleContentTypeData}
                        />
                    </div>
                    <div className='second-split'>
                        <SingleContentType  contentTypeSelected2={contentTypeSelected2} />
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default DashboardPage;