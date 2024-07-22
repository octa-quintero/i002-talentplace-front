import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../context/UserProvider";
import { fetchProjectById } from "../api/fetchProjectById";

export const useFetchProjectById = () => {

    const { projectId } = useParams();
    const { setToken, user } = useUserContext();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const recoverUser = JSON.parse(user);

    useEffect(() => {
        const fetchProject = async () => {

            const storedToken = localStorage.getItem("token");
            setToken(storedToken);

            try {
                const userId = recoverUser.id;
                const project = await fetchProjectById(userId, projectId, storedToken);
                setProject(project);
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

        fetchProject();
    }, [projectId]);

    return { project, loading }
}