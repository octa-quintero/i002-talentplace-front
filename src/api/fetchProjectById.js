import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export const fetchProjectById = async (userId, projectId, storedToken) => {

    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/projects/${userId}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
            params: { projectId } 
        });              

        const project = response.data;
        return project;        

    } catch (error) {
        throw error;
    }
}