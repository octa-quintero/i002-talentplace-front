import { useState } from "react";
import { fetchRegisterForm } from '../api/fetchRegsiterForm';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useRegisterForm = () => {
    const [registerData, setRegisterData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        pais: '',
        tipo: '',
        contrasenia: '',
        email: ''
    });

    const [inputType, setInputType] = useState("password");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };

    // Funcion para validacion de inputs
    const validate = () => {
        const newErrors = {};

        if (!registerData.nombre) {
            newErrors.nombre = "Name is required";
        }

        if (!registerData.apellido) {
            newErrors.apellido = "Surname is required";
        }

        if (!registerData.pais) {
            newErrors.pais = "Country is required";
        }

        if (!registerData.telefono) {
            newErrors.telefono = "Telephone is required";
        } else if (!/^\d{10}$/.test(registerData.telefono)) {
            newErrors.telefono = 'Telephone must contain 10 digits';
        }

        if (!registerData.tipo) {
            newErrors.tipo = "Type is required";
        }

        if (!registerData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
            newErrors.email = "Email format is invalid";
        }

        if (!registerData.contrasenia) {
            newErrors.contrasenia = "Password is required";
        } else if (registerData.contrasenia.length < 8) {
            newErrors.contrasenia = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(registerData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(registerData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one number';
        }

        return newErrors;
    };

    // Funcion para ver mostrar u ocultar la contraseña
    const togglePasswordVisible = () => {
        setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setIsSubmitting(true);
            setLoading(true)

            try {
                // En caso de éxito, muestra una notificacion y lleva al home
                const data = await fetchRegisterForm(registerData);

                Swal.fire({
                    icon: "success",
                    title: "Usuario creado con éxito",
                    text: "Puede iniciar sesión",
                    timer: 3000,
                });
                navigate('/login');

            } catch (error) {

                // Si hay un error lo notifica
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "El correo electrónico ya existe.",
                    timer: 3000,
                });

            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return {
        registerData,
        inputType,
        errors,
        isSubmitting,
        loading,
        handleChange,
        togglePasswordVisible,
        handleSubmit
    };
};

export default useRegisterForm;