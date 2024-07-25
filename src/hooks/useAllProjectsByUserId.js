import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useUserContext } from "../context/UserProvider";
import { fetchAllProjectsByUserId } from "../api/fecthAllProjectsByUserId";


export const useAllProjectsByUserId = () => {

    const [projects, setProjects] = useState([]);    
    const { setToken, token, user } = useUserContext();
    const [loading, setLoading] = useState(true);
    const recoverUser = JSON.parse(user);

    useEffect(() => {
        const fetchAllProjects = async () => {
            
            const storedToken = localStorage.getItem("token");
            setToken(storedToken);

            try {        
                const userId = recoverUser.id;
                const projects = await fetchAllProjectsByUserId(userId, storedToken);
                setProjects(projects);
                
            } catch (error) {
                const errorMessage = error.response ? error.response.data.message : error.message;
                Swal.fire({
                    title: 'Error!',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'Volver'
                });
            }
            finally {
                setLoading(false);
            }
        };
    
        fetchAllProjects();
    }, [setToken]);

    return { projects, loading }
}