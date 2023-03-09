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

export interface ContentType{
    typeName: string;
    fields: string[];
    id: string;
}

export interface SideBarProps{
    contentTypes: ContentType[];
    contentTypeSelected:ContentType;
    setContentTypeSelected: React.Dispatch<React.SetStateAction<ContentType>>;
    contentBuilderSelected: boolean;
    setContentBuilderSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContentTypesViewerProps{
    contentTypes: ContentType[];
    contentTypeSelected2:ContentType;
    setContentTypeSelected2: React.Dispatch<React.SetStateAction<ContentType>>;
    singleContentTypeData: string[];
    setSingleContentTypeData: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface SingleContentTypeProps{
    contentTypeSelected2:ContentType;
}