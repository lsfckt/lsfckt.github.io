import { getUser } from "../utils.js";

const user = getUser();

async function request(method, url, data) {

    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': 'HldtIGA5qRtgbf0wcjoSMvlKvNvNmgg0Sm5yle1e',
            'X-Parse-REST-API-Key': 'lZw06hl6ICze1dND9Yml04RE7ce08CyMFz1d6YLB',
        },
    }

    if (user) {
        options.headers['X-Parse-Session-Token'] = user.sessionToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

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