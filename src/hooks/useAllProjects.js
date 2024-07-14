import { useEffect, useState } from 'react';
import { fetchAllProjects } from '../api/fetchAllProjects';

const useAllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchAllProjects();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        loadProjects();
    }, []);

    const toggleClickedHeart = (projectId) => {
        setProjects(prevProjects =>
            prevProjects.map(project => 
                project.id === projectId 
                    ? { ...project, clickedHeart: !project.clickedHeart } 
                    : project
            )
        );
    };

    const toggleClickedBookmark = (projectId) => {
        setProjects(prevProjects =>
            prevProjects.map(project => 
                project.id === projectId 
                    ? { ...project, clickedBookmark: !project.clickedBookmark } 
                    : project
            )
        );
    };

    return { toggleClickedBookmark, toggleClickedHeart, projects, loading };
};

export default useAllProjects;
