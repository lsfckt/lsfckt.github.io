import { endpoints } from "./data.js";
import * as api from '../services/api.js';

export async function fetchLogin(name, pass) {
    (async () => {
        try {
            // Pass the username and password to logIn function
            let user = await Parse.User.logIn(name, pass);
            // Do stuff after successful login
            console.log('Logged in user', user);
        } catch (error) {
            console.error('Error while logging in user', error);
        }
    })();

    return api.get(endpoints.login);
}

export async function fetchRegister(data) {
    return api.post(endpoints.register, data);
}

export async function fetchLogout() {
    return api.post(endpoints.logout);
}
