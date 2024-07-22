import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useUserContext } from "../context/UserProvider";
import { fetchAllProjectsByUserId } from "../api/fecthAllProjectsByUserId";


export const useAllProjectsByUserId = () => {

    const [projects, setProjects] = useState([]);    
    const { setToken, token, user } = useUserContext();
    const [loading, setLoading] = useState(true);
    const recoverUser = JSON.parse(user)
    console.log(recoverUser.id);

    useEffect(() => {
        const fetchAllProjects = async () => {

            try {
                const storedToken = localStorage.getItem("token");

                console.log(token);
                // const storedToken = token;
                console.log("storedToken",storedToken);
                setToken(storedToken);
        
                const projects = await fetchAllProjectsByUserId(recoverUser.id, storedToken);
                console.log(projects);    
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