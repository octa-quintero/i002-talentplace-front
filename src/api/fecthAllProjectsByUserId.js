import axios from "axios";


export const fetchAllProjectsByUserId = async (userId, storedToken) => {
    const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;
    console.log(userId);
    console.log(storedToken);
    
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/projects/user/${userId}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
        });
        
        const projects = response.data;
        console.log(projects);
        return projects;        

    } catch (error) {
        throw error;
    }
}