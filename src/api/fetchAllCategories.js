import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export const fetchAllCategories = async () => {

    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/projects/categories`);              

        const categories = response.data;
        return categories;        

    } catch (error) {
        throw error;
    }
}