import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchPublishProject = async (projectData, userId, storedToken) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/projects/${userId}`,
            projectData,
            {
                headers: {
                    'Authorization': `Bearer ${storedToken}`, 
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating project:", error);
        throw error;
    }
};