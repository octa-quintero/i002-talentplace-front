import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchLoginForm = async (loginData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/login`, loginData);
        return response.data;
    } catch (error) {
        throw error;
    }
};