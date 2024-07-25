import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../context/UserProvider";
import { fetchApplicationsById } from '../api/fetchApplicationsById'
import { fetchProjectById } from "../api/fetchProjectById";


export const useFetchApplicationsById = () => {

    const { projectId } = useParams();
    const { setToken, user } = useUserContext();
    const [applications, setApplications] = useState(null);
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const recoverUser = JSON.parse(user);

    useEffect(() => {
        const fetchApplications = async () => {

            const storedToken = localStorage.getItem("token");
            setToken(storedToken);

            try {
                const userId = recoverUser.id;
                const applications = await fetchApplicationsById(userId, projectId, storedToken);
                setApplications(applications);

                const projectPromises = applications.map(app => fetchProjectById(userId, app.projectId, storedToken));
                const projectResults = await Promise.all(projectPromises);
                setProjects(projectResults);
                
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

        fetchApplications();
    }, [projectId]);

    return { applications, projects, loading }
}