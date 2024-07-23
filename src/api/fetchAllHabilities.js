import axios from "axios";

export const fetchAllHabilities = async () => {
    const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;
    
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/users/me/habilities`);              

        const habilities = response.data;
        return habilities;        

    } catch (error) {
        throw error;
    }
}