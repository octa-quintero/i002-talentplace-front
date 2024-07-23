import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { fetchPublishProject } from "../api/fetchPublishProject";
import { useUserContext } from "../context/UserProvider";

const usePublishProjectForm = () => {
    const { userId, storedToken } = useUserContext();
    const [formData, setFormData] = useState({
        // idEmpresa:'',
        titulo: '',
        descripcion: '',
        // presupuesto:'',
        requisitos: '',
        habilidades: [],
        categoria: '',
        modalidad: '',
        estado:''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
    };

    const handleSelectChange = (name, selectedOptions) => {
        setFormData({ ...formData, [name]: selectedOptions.map(option => option.value) });
    };

    // Validación simple
    const validate = () => {
        const newErrors = {};

        if (!formData.titulo) {
            newErrors.titulo = "Título es requerido";
        }

        if (!formData.descripcion) {
            newErrors.descripcion = "Descripción es requerida";
        }

        if (!formData.estado) {
            newErrors.estado = "Estado es requerido";
        }

        // if (!formData.presupuesto) {
        //     newErrors.presupuesto = "Presupuesto es requerido";
        // }

        if (!formData.modalidad) {
            newErrors.modalidad = "Modalidad es requerida";
        }

        if (!formData.habilidades) {
            newErrors.habilidad = "Habilidad es requerida";
        }

        if (!formData.categoria) {
            newErrors.categoria = "Categorías son requeridas";
        }

        if (!formData.requisitos) {
            newErrors.requisitos = "Requisitos son requeridos";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form data before validation:", formData);

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
                console.log("Sending data to API:", formData);
                const response = await fetchPublishProject(formData, userId, storedToken);
                console.log("API response:", response);
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
        setFormData({
            titulo: '',
            descripcion: '',
            requisitos: '',
            habilidades: [],
            categoria: '',
            modalidad: '',
            estado: ''
        });
        setErrors({});
    };

    return {
        formData,
        errors,
        isSubmitting,
        loading,
        handleSelectChange,
        handleChange,
        handleSubmit,
        resetForm
    };
};

export default usePublishProjectForm;