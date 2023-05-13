import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '036d7529-fbbe-405a-9a0f-1129614b96cf' },
  withCredentials: true,
});

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
}

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { 
      return response.data;
    });
  },
}

export const followAPI = {
  follow(id) {
    return instance.post(`follow/${id}`).then(response => { 
      return response.data;
    })
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data;
    })
  },
}