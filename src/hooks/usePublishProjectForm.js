import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { fetchPublishProject } from "../api/fetchPublishProject";
import { useUserContext } from "../context/UserProvider";
import { fetchAllHabilities } from "../api/fetchAllHabilities";
import { fetchAllCategories } from "../api/fetchAllCategories";

const usePublishProjectForm = () => {
    const { user, token } = useUserContext();
    const parsedUser = user ? JSON.parse(user) : null;
    const userId = parsedUser ? parsedUser.id : null;
    const [projectState, setProjectState] = useState({
        titulo: '',
        descripcion: '',
        requisitos: '',
        habilidades: [],
        categoria: '',
        modalidad: '',
        estado: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;
    if (name === 'estado') {
        newValue = value === 'true';
    }

    setProjectState((prevState) => ({
        ...prevState,
        [name]: newValue,
    }));
    };

    // Validación simple
    const validate = () => {
        const newErrors = {};

        if (!projectState.titulo) newErrors.titulo = "Título es requerido";
        if (!projectState.descripcion) newErrors.descripcion = "Descripción es requerida";
        if (!projectState.modalidad) newErrors.modalidad = "Modalidad es requerida";
        if (projectState.habilidades.length === 0) newErrors.habilidades = "Habilidad es requerida";
        if (!projectState.categoria) newErrors.categoria = "Categorías son requeridas";
        if (!projectState.requisitos) newErrors.requisitos = "Requisitos son requeridos";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            console.log("Validation errors:", formErrors);
            setErrors(formErrors);
        } else {
            setErrors({});
            setIsSubmitting(true);
            setLoading(true);

            try {
                // Enviar datos al backend
                const category = projectState.categoria.nombre; 
                const habilities = projectState.habilidades.map(h => h.nombre) 
            
                const formattedData= {
                    ...projectState,
                    habilidades: habilities,
                    categoria: category
                };
                const response = await fetchPublishProject(formattedData, userId, token);
                Swal.fire({
                    icon: "success",
                    title: "Proyecto publicado con éxito",
                    text: "Tu proyecto ha sido publicado",
                    timer: 3000,
                });
                navigate('/dashboard/projects');

            } catch (error) {
                console.error("Error in handleSubmit:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error al publicar el proyecto",
                    text: "Por favor, intenta de nuevo",
                    timer: 3000,
                });
            } finally {
                setIsSubmitting(false);
                setLoading(false);
            }
        }
    };

    const resetForm = () => {
        setProjectState({
            titulo: '',
            descripcion: '',
            requisitos: '',
            habilidades: [],
            categoria: '',
            modalidad: '',
            estado: false
        });
        setErrors({});
    };

    return {
        projectState,
        setProjectState,
        errors,
        isSubmitting,
        loading,
        handleChange,
        handleSubmit,
        resetForm
    };
};

export default usePublishProjectForm;