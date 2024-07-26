import axios from "axios";

export const postApplication = async (userId, proyectoId, storedToken) => {
    const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;
    
    try {
        const response = await axios.post(`${BACKEND_ENDPOINT}/applications/${userId}`, {proyectoId}, {
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