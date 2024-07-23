import axios from "axios";

export const putProject = async (userId, projectDataUpdate, storedToken) => {
    const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;
    
    try {
        const response = await axios.put(`${BACKEND_ENDPOINT}/projects/${userId}`, projectDataUpdate, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${storedToken}` 
            },
        });
        return response;        

    } catch (error) {
        throw error;
    }
}