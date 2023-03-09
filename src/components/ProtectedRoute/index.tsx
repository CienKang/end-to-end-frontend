import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProtectedRouteProps } from '../../types';

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            navigate('/login');
        }
    }
    , []);

    return (
        <div>
            {isAuthenticated && children}
        </div>
    );
};

export default ProtectedRoute;