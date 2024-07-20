import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchLoginForm } from '../api/fetchLoginForm';
import { useUserContext } from '../context/UserProvider';
import Swal from "sweetalert2";

const useLoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        contrasenia: ''
    });
    const [inputType, setInputType] = useState("password");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { setToken, setUser } = useUserContext();


    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!loginData.email) {
            newErrors.email = "Email is required";
        } else if (!/.+@.+\.[A-Za-z]+$/.test(loginData.email)) {
            newErrors.email = "Email format is invalid";
        }

        if (!loginData.contrasenia) {
            newErrors.contrasenia = "Password is required";
        } else if (loginData.contrasenia.length < 8) {
            newErrors.contrasenia = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(loginData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(loginData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one number';
        }

        return newErrors;
    };

    // funcion para mostrar u ocultar la contraseña
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

            try {
                const data = await fetchLoginForm(loginData);
                
                // Guardar el token y el usuario en el contexto y localStorage
                // Y redirige al home
                setToken(data.refreshToken);
                setUser(JSON.stringify(data.user));
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('token', data.refreshToken);
                navigate('/');

                // Activa una notificacion de exito al inicar sesion
                Toast.fire({
                    icon: "success",
                    title: `Bienvenido ${data.user.nombre}`,
                });
                console.log("esto es data.user",data.user);
                return data.user

            } catch (error) {
                console.log(error);
                Toast.fire({
                    icon: "error",
                    title: `Usuario o contraseña inválida`,
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };



    // Funcion para cerrar la sesion con notificacion
    const closeSession = () => {
        Swal.fire({
            title: `¿Seguro que quieres cerrar la sesión?`,
            icon: 'question',
            position: "center",
            confirmButtonText: "Seguro",
            confirmButtonColor: "#38b6ff",
            showCancelButton: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: "success",
                    title: "Sesión cerrada"
                });
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setToken(null);
                setUser(null);
                navigate('/');
            }
        })
    }



    return {
        loginData,
        inputType,
        errors,
        isSubmitting,
        handleChange,
        togglePasswordVisible,
        handleSubmit,
        closeSession
    };
};

export default useLoginForm;