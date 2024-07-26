import Swal from "sweetalert2";
import { putProject } from "../api/putProject";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";

export const useEditProject = () => {

    const { setToken, user } = useUserContext();

    const navigate = useNavigate();

    const editProject = async (projectDataUpdate) => {

        const storedToken = localStorage.getItem("token");
        setToken(storedToken);

        const handleGoProjects = () => {
            navigate(`/dashboard/projects`);
        }
    
        try {
            const response = await putProject(JSON.parse(user).id, projectDataUpdate, storedToken);
      
            if (response.status === 200) {
              let timerInterval;
              
              Swal.fire({
                position: "top-end",
                title: "Actualizando datos..",
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                },
                willClose: () => {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Proyecto actualizado con exito",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true
                  });
                  clearInterval(timerInterval);
                  handleGoProjects();
                }
              });
            }
      
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
    return { editProject };
};