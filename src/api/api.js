import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '779aa033-f03a-4c1c-935c-a62d01abe5d5' },
  withCredentials: true,
});

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status: status });
  },
  updateAvatar(file) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put('profile/photo', formData, {
      header: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  updateProfile(profile) {
    return instance.put('profile', profile);
  }
}

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  async getMates(currentPage = 1, pageSize = 10) {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}&friend=true`);
    return response.data;
  },
}

export const followAPI = {
  async follow(id) {
    const response = await instance.post(`follow/${id}`);
    return response.data;
  },
  async unfollow(id) {
    const response = await instance.delete(`follow/${id}`);
    return response.data;
  },
}