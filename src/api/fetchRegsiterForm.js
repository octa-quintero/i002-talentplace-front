import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchRegisterForm = async (registerData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/register`, registerData);
        return response.data;
    } catch (error) {
        throw error;
    }
};