import { useEffect } from "react";
import Swal from "sweetalert2";
import {postApplicationsById} from '../api/fetchApplicationsById'



//TODO TERMINAR HOOK
//? DESTINO DE HOOK

export const usePostApplicationsById = () => {


    useEffect(() => {
        const postApplications = async () => {

            const storedToken = localStorage.getItem("token");
            setToken(storedToken);

            try {

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

        postApplications();
    }, [projectId]);

    return { application, loading }
}