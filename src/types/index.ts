export interface LoginPageProps {
    type: string;
}

export interface LoginBoxProps {
    param: string;
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    handleLoginClick: () => void;
}

export interface RegisterBoxProps {
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    handleRegisterClick: () => void;
}

export interface ProtectedRouteProps {
    children: JSX.Element;
}

export interface UserData {
    email: string;
    password: string;

}

export interface ContentType {
    typeName: string;
    fields: string[];
    id: string;
}


export interface backendType {
    id: number;
    typeId: number;
    data: {
        [key: string]: string
    };
    createdAt: string;
    updatedAt: string;
}

export interface SideBarProps {
    contentTypes: ContentType[];
    contentTypeSelected: ContentType;
    setContentTypeSelected: React.Dispatch<React.SetStateAction<ContentType>>;
    contentBuilderSelected: boolean;
    setContentBuilderSelected: React.Dispatch<React.SetStateAction<boolean>>;
    contentStorage: backendType[];
    setContentStorage: React.Dispatch<React.SetStateAction<backendType[]>>;
}

export interface ContentTypesViewerProps {
    contentTypes: ContentType[];
    contentTypeSelected2: ContentType;
    setContentTypeSelected2: React.Dispatch<React.SetStateAction<ContentType>>;
    singleContentTypeData: string[];
    setSingleContentTypeData: React.Dispatch<React.SetStateAction<string[]>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean;
}

export interface SingleContentTypeProps {
    contentTypeSelected2: ContentType;
    setContentTypeSelected2: React.Dispatch<React.SetStateAction<ContentType>>;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setModalFor: React.Dispatch<React.SetStateAction<string>>;

}

export interface SingleModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setContentTypes: React.Dispatch<React.SetStateAction<ContentType[]>>;
    modalFor: string;
    contentTypeSelected2: ContentType;
    setContentTypeSelected2: React.Dispatch<React.SetStateAction<ContentType>>;
    contentTypes: ContentType[];
}

export interface ContentStorageInstancesProps {
    contentStorage: backendType[];
    setContentStorage: React.Dispatch<React.SetStateAction<backendType[]>>;
    setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormModalProps {
    showModalForm: boolean;
    setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
    contentTypeSelected: ContentType;
    setContentTypeSelected: React.Dispatch<React.SetStateAction<ContentType>>;
    contentStorage: backendType[];
    setContentStorage: React.Dispatch<React.SetStateAction<backendType[]>>;
}