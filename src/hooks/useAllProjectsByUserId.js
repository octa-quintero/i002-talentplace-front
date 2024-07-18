import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useUserContext } from "../context/UserProvider";
import { fetchAllProjectsByUserId } from "../api/fecthAllProjectsByUserId";


export const useAllProjectsByUserId = () => {

    const [projects, setProjects] = useState([]);    
    const { setToken } = useUserContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllProjects = async () => {

            try {
                const storedToken = localStorage.getItem("token");
                setToken(storedToken);
          
                const projects = await fetchAllProjectsByUserId();    
                setProjects(projects);
                setLoading(false);
                
            } catch (error) {
                const errorMessage = error.response ? error.response.data.message : error.message;
                Swal.fire({
                    title: 'Error!',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'Volver'
                });
            }
        };
    
        fetchAllProjects();
    }, [setToken]);

    return { projects, loading }
}