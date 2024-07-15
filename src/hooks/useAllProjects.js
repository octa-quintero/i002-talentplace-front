import { useEffect, useState } from 'react';
import { fetchAllProjects } from '../api/fetchAllProjects';

const useAllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchAllProjects();
                console.log(data);
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        loadProjects();
    }, []);

    return { projects, loading };
};

export default useAllProjects;
