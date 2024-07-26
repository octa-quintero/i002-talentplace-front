import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";
import { postApplication } from "../api/postApplication";

export const usePostApplicationsById = () => {
    const navigate = useNavigate();
    
    const handleGoOpportunities = () => {
        navigate(`/opportunities`);
    };

    const { projectId } = useParams();

    const { user, setToken } = useUserContext();
    const userContext = JSON.parse(user);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);

    const [applicationData, setApplicationData] = useState({
        nombre: userContext?.nombre || '',
        apellido: userContext?.apellido || '',
        telefono: userContext?.telefono || '',
        pais: userContext?.pais || '',
        email: userContext?.email || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplicationData({
            ...applicationData,
            [name]: value
        });
    };

    const validate = () => {
        const errors = {};
        if (!applicationData.nombre) errors.nombre = "Nombre es requerido";
        if (!applicationData.apellido) errors.apellido = "Apellido es requerido";
        if (!applicationData.telefono) errors.telefono = "Teléfono es requerido";
        if (!applicationData.pais) errors.pais = "País es requerido";
        if (!applicationData.email) errors.email = "Email es requerido";
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const storedToken = localStorage.getItem("token");
        setToken(storedToken);

        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setIsSubmitting(true);
            setLoading(true)

            try {
                const response = await postApplication(userContext.id, projectId, storedToken);
                
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
                            title: "Te postulaste con éxito!",
                            text: `${response.data.message}`,
                            showConfirmButton: false,
                            timer: 2500,
                            timerProgressBar: true
                        });
                        handleGoOpportunities();
                    }
                });
                
            } catch (error) {

                const errorMessage = error.response ? error.response.data.message : error.message;

                Swal.fire({
                    position: "top-end",
                    title: "Realizando proceso..",
                    timer: 800,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                    willClose: () => {

                        if( error.response.data.code == 302 ) {
                            Swal.fire({
                                title: "<strong>Ups!</strong> </br> Ya has aplicado a este proyecto.",
                                icon: "info",
                                html: `
                                    ¡Genial!
                                    </br>
                                    Estamos emocionados por ti y te avisaremos cuando el empleador revise tu aplicación.
                                    </br>
                                    <b>¡Buena suerte!</b>
                                `,
                                showCloseButton: true,
                                focusConfirm: false,
                                confirmButtonText: `
                                <i class="fa fa-thumbs-up"></i>Aceptar
                                `,
                                confirmButtonAriaLabel: "Thumbs up, great!",
                                cancelButtonAriaLabel: "Thumbs down"
                            });
                        }
                        else {
                            Swal.fire({
                                title: 'Error!',
                                text: errorMessage,
                                icon: 'error',
                                confirmButtonText: 'Volver'
                            });
                        }
                    }
                });

            } finally {
                setIsSubmitting(false);
                setLoading(false);
            }
        }
    };

    return {
        applicationData,
        errors,
        isSubmitting,
        loading,
        handleChange,
        handleSubmit
    }
}
