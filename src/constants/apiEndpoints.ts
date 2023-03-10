export const AUTH_BACKEND_URL = 'http://localhost:4000/';
export const BACKEND_URL = 'http://localhost:8080/';

export const REGISTER_USER = {
    url: 'user',
    method: 'POST'
};

export const LOGIN_USER = {
    url: 'login',
    method: 'POST'
};

export const VALIDATE_TOKEN = {
    url: 'token/validate',
    method: 'POST'
};

export const GET_ALL_CONTENT_TYPES = {
    url: 'contentTypes',
    method: 'GET'
};

export const GET_ALL_CONTENTS_FOR_CONTENT_TYPE = (id:string) =>({
    url: `contentStorage/${id}`,
    method: 'GET'
});

export const CREATE_NEW_CONTENT_TYPE = {
    url: 'contentTypes',
    method: 'POST'
};

export const CREATE_NEW_FIELD_FOR_CONTENT_TYPE = (id:string) =>({
    url: `contentTypes/${id}`,
    method: 'PATCH'
});
