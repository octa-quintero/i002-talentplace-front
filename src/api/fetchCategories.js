import axios from 'axios';
// Archivo que tiene la url para el fetch
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const fetchCategories = async () => {
    try {
        const response = await axios.get(`${backendUrl}/projects/categories`);
        const categories = response.data;
        return categories;

    } catch (error) {
        console.error('Error fetching categories from endpoint:', error);
        throw error;
    }
};

export { fetchCategories };