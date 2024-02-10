import * as api from '../services/api.js';

export const host = 'https://virilecorn.backendless.app';

export const endpoints = {
    login: `${host}/api/users/login`,
    register: `${host}/api/users/register`,
    logout: `${host}/api/users/logout`,
    createQuiz: `${host}/api/data/quiz`,
    browse: `${host}/api/data/quiz`,
    getSingleAlbum: (id) => `${host}/data/albums/${id}`, // + id // GET
    editSingleAlbum: (id) => `${host}/data/albums/${id}`, // + id / PUT
    deleteAlbum: (id) => `${host}/data/albums/${id}`, // + id // DELETE
    addLike: `${host}/data/likes`,
    getTotalAlbumLikes: (albumId) => `${host}/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    getAlbumLikesForSpecificUser: (albumId, userId) => `${host}/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}

export async function createQuiz(data) {
    return api.post(endpoints.createQuiz, data);
}

export async function browse() {
    return api.get(endpoints.browse);
}

export async function fetchAlbumDetails(id) {
    return api.get(endpoints.getSingleAlbum(id));
}

export async function fetchEditAlbum(id, data) {
    return api.put(endpoints.editSingleAlbum(id), data);
}

export async function fetchDeleteAlbum(id) {
    return api.del(endpoints.deleteAlbum(id));
}

export async function fetchToAddLike(data) {
    return api.post(endpoints.addLike, data);
}

export async function fetchToGetTotalLikesForAnAlbum(id) {
    return api.get(endpoints.getTotalAlbumLikes(id));
}

export async function fetchToGetAlbumLikesForSpecificUser(albumId, userId) {
    return api.get(endpoints.getAlbumLikesForSpecificUser(albumId, userId));
}

