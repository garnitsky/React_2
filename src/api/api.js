import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: { "API-KEY": '1d7b55dd-9a4c-45bd-90d8-f81b626b6a64' }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
};

export const getUnFollow = (id = 1) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data;
        })
};

export const getFollow = (id = 1) => {
    return instance.post(`follow/${id}`, {})
        .then(response => {
            return response.data;
        })
};
