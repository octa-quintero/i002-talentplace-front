import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export const fetchAllProjectsByUserId = async (userId, storedToken) => {
    
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/projects/user/${userId}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
        });
        
        const projects = response.data;
        return projects;        

    } catch (error) {
        throw error;
    }
}