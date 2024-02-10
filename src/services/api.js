import { getUser } from "../utils.js";

const user = getUser();

async function request(method, url, data) {

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
    }

    if (user) {
        options.headers['user-token'] = user["user-token"];
    }

    // if (data) {
    //     options.headers['Content-Type'] = 'application/json';
    //     options.body = JSON.stringify(data);
    // }

    try {

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }

        const data = await response.json().catch((e) => response);

        return data;

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');