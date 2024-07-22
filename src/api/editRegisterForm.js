import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const updateUser = async (userData) => {
    try {
        const response = await axios.put(`${BACKEND_URL}/auth/update`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getUserById = async (userId, token) => {
    debugger
    try {
        const response = await axios.get(`${BACKEND_URL}/users/me/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { userId } 
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
