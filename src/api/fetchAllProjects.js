import axios from 'axios';
// Archivo que tiene la url para el fetch
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const fetchAllProjects = async () => {
    // Hace el fetch a la api segun el endpoint para todos los proyectos y mapea el fetch de los proyectos
    try {
        // Agrego la extension de la url segun el caso y lo guardo en una variable
        const response = await axios.get(`${backendUrl}/projects`);
        return response.data.map(project => ({
            ...project,
        }));
    } catch (error) {
        console.error('Error fetching projects from endpoint:', error);
        throw error;
    }
};

export { fetchAllProjects };