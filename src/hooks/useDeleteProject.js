import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";
import { delProject } from "../api/delProject";

export const useDeleteProject = () => {

    const {  setToken, user } = useUserContext();
    const recoverUser = JSON.parse(user);
    const { projectId } = useParams();
    const navigate = useNavigate();

    const deleteProject = async () => {

        const storedToken = localStorage.getItem("token");
        setToken(storedToken);        
        const userId = recoverUser.id;

        const handleGoProjects = () => {
            navigate(`/dashboard/projects/`);
        }
    
        try {

            const result = await Swal.fire({
                title: "¿Estas seguro que quieres eliminarlo?",
                text: "Estos cambios no se pueden revertir.",
                icon: "warning",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminar!",
                allowOutsideClick: false
            });

            if (result.isConfirmed) {
                try {
                  const response = await delProject(userId, projectId, storedToken);
        
                  let timerInterval;
                  Swal.fire({
                    position: "top-end",
                    title: "Realizando proceso..",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                      Swal.showLoading();
                    },
                    willClose: () => {
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Eliminado!",
                        text: `${response.data.message}`,
                        showConfirmButton: false,
                        timer: 2500,
                        timerProgressBar: true
                      });
                      clearInterval(timerInterval);
                      handleGoProjects();
                    }
                  });
        
                } catch (error) {
                  console.error("Error al eliminar el proyecto:", error);
                  await Swal.fire({
                    title: "Error",
                    text: "No se pudo eliminar el proyecto. Intenta nuevamente.",
                    icon: "error",
                  });
                }
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
    return { deleteProject };
};