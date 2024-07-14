import React, { useEffect, useState } from 'react'
import {fetchAllProjects} from '../api/fetchAllProjects'


const useAllProjects = () => {
    
    // Manejo del estado de los proyectos
    const [projects, setProjects] = useState([]);

    // funcion para llamar a la api
    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchAllProjects();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        loadProjects();
    }, []);


    // Funcion para clickear favoritos por id del proyecto
    const toggleClickedHeart = (projectId) => {
        setProjects(prevProjects =>
            prevProjects.map(project => 
                project.id === projectId 
                    ? { ...project, clickedHeart: !project.clickedHeart } 
                    : project
            )
        );
    };

    // Funcion para clickear guardado por id del proyecto
    const toggleClickedBookmark = (projectId) => {
        setProjects(prevProjects =>
            prevProjects.map(project => 
                project.id === projectId 
                    ? { ...project, clickedBookmark: !project.clickedBookmark } 
                    : project
            )
        );
    };
    
    return {toggleClickedBookmark, toggleClickedHeart, projects}

}

export default useAllProjects