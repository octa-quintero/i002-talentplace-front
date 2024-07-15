import axios from 'axios';

// Archivo que tiene la ruta para el fetch
import { endPoints } from './endPoints';
import { useState } from 'react';


const fetchAllProjects = async () => {
    

    // Hace el fetch a la api segun el endpoint para todos los proyectos y mapea el fetch de los proyectos
    try {
        const urlAllProjects = endPoints.projects.url + "/projects"
        console.log(urlAllProjects);
        const response = await axios.get(urlAllProjects);
        console.log(response.data);
        return response.data.map(project => ({
            ...project,
            clickedHeart: false,
            clickedBookmark: false
        }));
    } catch (error) {
        console.error('Error fetching projects from endpoint:', error);
        throw error;
    }
};

export { fetchAllProjects };