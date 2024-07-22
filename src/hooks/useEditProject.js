import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../context/UserProvider";
import { fetchProjectById } from "../api/fetchProjectById";

export const useEditProject = () => {

    const { projectId } = useParams();
    const { setUser, setToken  } = useUserContext();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {

            const storedToken = localStorage.getItem("token");
            setToken(storedToken);
            const storedUser = localStorage.getItem("user");
            const currentUser = JSON.parse(storedUser);
            if (currentUser) {
              setUser(currentUser);
            }

            try {
                const userId = currentUser.id;
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