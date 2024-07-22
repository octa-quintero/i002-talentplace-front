import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useDiscardChanges = () => {

    const navigate = useNavigate();   

    const discardChanges = async (route) => {
        
        const handleGoSite = () => {
            navigate(route);
        };

        const result = await Swal.fire({
            title: "¿Descartar los cambios?",
            text: "Estos cambios no se pueden revertir.",
            icon: "question",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, descartar!",
            allowOutsideClick: false
        });
        if (result.isConfirmed) {
            Swal.fire({
                title: "Hecho!",
                text: "Los cambios fueron descartados",
                icon: "success",
                
            });
            handleGoSite();
        }
    };
    return { discardChanges };
}