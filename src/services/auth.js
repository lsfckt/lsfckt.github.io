import { endpoints } from "./data.js";
import * as api from '../services/api.js';

export async function fetchLogin() {
    return api.get(endpoints.login);
}

export async function fetchRegister(data) {
    return api.post(endpoints.register, data);
}

export async function fetchLogout() {
    return api.post(endpoints.logout);
}
