import React, { useEffect, useState } from 'react';
import { ContentStorageInstances, FormModal, SideBar, SingleContentType, SingleModal } from '../../components';
import ContentTypeViewer from '../../components/ContentTypesViewer';
import { GET_ALL_CONTENT_TYPES } from '../../constants/apiEndpoints';
import { backendType, ContentType } from '../../types';
import { makeRequestToBackend } from '../../utils/makeRequest/makeRequest';
import './DashboardPage.css';

const DashboardPage = () => {

    const [contentTypes, setContentTypes] = useState<ContentType[]>([]);
    const [contentTypeSelected, setContentTypeSelected] = useState<ContentType>({
        typeName: '',
        fields: [],
        id: ''
    });
    const [contentTypeSelected2, setContentTypeSelected2] = useState<ContentType>({
        typeName: '',
        fields: [],
        id: ''
    });

    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalForm, setShowModalForm] = useState<boolean>(false);
    const [modalFor, setModalFor] = useState<string>('Content Type');

    const [singleContentTypeData, setSingleContentTypeData] = useState<string[]>([]);
    const [contentBuilderSelected, setContentBuilderSelected] = useState<boolean>(true);
    const [contentStorage, setContentStorage] = useState<backendType[]>([]);

    useEffect(() => {
        makeRequestToBackend({ ...GET_ALL_CONTENT_TYPES }, {}).then(data => {
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
                    contentStorage={contentStorage}
                    setContentStorage={setContentStorage}
                />
            </div>
            <div className='main-bar'>
                <header>
                    {contentTypeSelected.typeName || 'Content Types'}
                </header>
                {contentBuilderSelected &&
                    <div className='main-split-screen'>
                        <div className='first-split'>
                            <ContentTypeViewer
                                contentTypes={contentTypes}
                                contentTypeSelected2={contentTypeSelected2}
                                setContentTypeSelected2={setContentTypeSelected2}
                                singleContentTypeData={singleContentTypeData}
                                setSingleContentTypeData={setSingleContentTypeData}
                                setShowModal={setShowModal}
                                showModal={showModal}
                            />
                        </div>
                        <div className='second-split'>
                            {contentTypeSelected2.typeName !== '' &&
                                <SingleContentType
                                    setContentTypeSelected2={setContentTypeSelected2}
                                    contentTypeSelected2={contentTypeSelected2}
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    setModalFor={setModalFor}
                                />
                            }
                        </div>
                    </div>
                }
                {
                    !contentBuilderSelected &&
                    <ContentStorageInstances
                        contentStorage={contentStorage}
                        setShowModalForm={setShowModalForm}
                        setContentStorage={setContentStorage}
                    />
                }
            </div>

            {showModal && <SingleModal
                modalFor={modalFor}
                setShowModal={setShowModal}
                showModal={showModal}
                contentTypeSelected2={contentTypeSelected2}
                setContentTypes={setContentTypes}
                setContentTypeSelected2={setContentTypeSelected2}
                contentTypes={contentTypes}
            />}
            {
                showModalForm && <FormModal
                    showModalForm={showModalForm}
                    setShowModalForm={setShowModalForm}
                    contentTypeSelected={contentTypeSelected}
                    setContentTypeSelected={setContentTypeSelected}
                    contentStorage={contentStorage}
                    setContentStorage={setContentStorage}
                />
            }
        </div>
    );
};

export default DashboardPage;