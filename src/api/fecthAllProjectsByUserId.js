import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

// export const getAllProjectsByUser = async (userId, storedToken) => {
export const fetchAllProjectsByUserId = async (storedToken) => {
    
    try {
        // const response = await axios.get(`${BACKEND_ENDPOINT}/projects/user/${userId}`, {
        const response = await axios.get(`${BACKEND_ENDPOINT}/users`, {
            headers: { Authorization: `Bearer ${storedToken}` },
        });
        
        const projects = response.data;
        console.log(projects);
        return projects;        

    } catch (error) {
        throw error;
    }
}