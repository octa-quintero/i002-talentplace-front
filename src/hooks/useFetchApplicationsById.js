import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../context/UserProvider";
import {fetchApplicationsById} from '../api/fetchApplicationsById'


export const useFetchApplicationsById = () => {

    const { projectId } = useParams();
    const { setToken, user } = useUserContext();
    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);
    const recoverUser = JSON.parse(user);

    useEffect(() => {
        const fetchApplications = async () => {

            const storedToken = localStorage.getItem("token");
            setToken(storedToken);

            try {
                const userId = recoverUser.id;
                const application = await fetchApplicationsById(userId, projectId, storedToken);
                setApplication(application);
                console.log(application);
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

    return { application, loading }
}