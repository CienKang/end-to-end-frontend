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

}.5;