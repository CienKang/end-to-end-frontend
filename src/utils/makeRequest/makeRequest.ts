import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { AUTH_BACKEND_URL, BACKEND_URL } from '../../constants/apiEndpoints';



export const makeRequestToAuth = async (
    apiEndpoint: { url: string, method: string },
    dynamicConfig = {},
    navigate?: NavigateFunction
) => {

    try {
        const requestDetails = {
            baseURL: AUTH_BACKEND_URL,
            url: apiEndpoint.url,
            method: apiEndpoint.method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            },
            ...dynamicConfig
        };

        const { data } = await axios(requestDetails);
        return data;
    }

    catch (error) {
        if (navigate) {
            navigate('/error');
        }
    }
};

export const makeRequestToBackend = async (
    apiEndpoint: { url: string, method: string },
    dynamicConfig = {},
    navigate?: NavigateFunction
) => {

    try {
        const requestDetails = {
            baseURL: BACKEND_URL,
            url: apiEndpoint.url,
            method: apiEndpoint.method,
            ...dynamicConfig
        };

        const { data } = await axios(requestDetails);
        return data;
    }

    catch (error) {
        if (navigate) {
            navigate('/error');
        }
    }
};