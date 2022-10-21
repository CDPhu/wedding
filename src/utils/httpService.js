import { API_HOST } from '../config/apiService';

export const postRequest = async ({ data }) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch(API_HOST, config);
        return { status: response.status, message: 'Successfully update data' };
    } catch (error) {
        console.error(error, '[postRequest] error');
        return { status: 500, message: error.message };
    }
};

const encodeQueryData = (data) => {
    const ret = [];
    for (let d in data)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
};

export const getRequest = async (query) => {
    const config = {
        method: 'GET'
    };
    const requestUrl = query
        ? `${API_HOST}?${encodeQueryData(query)}`
        : API_HOST;
    try {
        const response = await fetch(requestUrl, config).then((response) => {
            return response.json();
        });
        return response;
    } catch (error) {
        console.error(error, '[getRequest] error');
        return { status: 500, message: error.message };
    }
};

export const postRequestWithData = async ({ url, data, method }) => {
    const config = {
        method,
        body: data
    };
    try {
        const response = await fetch(url, config);
        return response?.json() || null;
    } catch (error) {
        console.error(error, '[postRequest] error');
        return { status: 500, message: error.message };
    }
};

export const postRequestWithoutResp = async ({ url, data, method }) => {
    const config = {
        method,
        body: data
    };
    try {
        await fetch(url, config);
    } catch (error) {
        console.error(error, '[postRequest] error');
        return { status: 500, message: error.message };
    }
};
