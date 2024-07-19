import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchLoginForm } from '../api/fetchLoginForm';

const useLoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        contrasenia: ''
    });
    const [inputType, setInputType] = useState("password");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

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
                console.log(data);

                // TODO: Manejar la redirección y guardar el token aquí.
                // navigate('/dashboard');
            } catch (error) {
                console.log(error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return {
        loginData,
        inputType,
        errors,
        isSubmitting,
        handleChange,
        togglePasswordVisible,
        handleSubmit
    };
};

export default useLoginForm;