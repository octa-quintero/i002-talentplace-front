import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchPublishProject = async (formattedData, userId, token) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/projects/${userId}`,
            formattedData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating project:", error);
        throw error;
    }
};