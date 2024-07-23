import axios from "axios";

export const delProject = async (userId, projectId, storedToken) => {
    const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;
    
    try {
        const response = await axios.delete(`${BACKEND_ENDPOINT}/projects/${userId}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${storedToken}`
            },
            params: { projectId }
        });
        return response;        

    } catch (error) {
        throw error;
    }
}