import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": '1d7b55dd-9a4c-45bd-90d8-f81b626b6a64' }
})

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
        })
    }
}

