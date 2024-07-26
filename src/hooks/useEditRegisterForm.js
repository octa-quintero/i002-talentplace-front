import { useState, useEffect } from "react";
import { getUserById, updateUser } from '../api/editRegisterForm';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../context/UserProvider";
import validateUpdate from "./useValidateProfileForm";

const useEditRegisterForm = () => {
    let { token, user, setUser } = useUserContext();
    const userContext = JSON.parse(user);
    const { id } = userContext;
    const [objUser, setObjUser] = useState({});
    const [registerData, setRegisterData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        pais: '',
        // tipo: '',
        contrasenia: '',
        nuevaContrasenia: '',
        confirmarContrasenia:'',
        email: ''
    });

    const getDataUserById = async () => {
        const data = await getUserById(id, token);
        setObjUser(data);
    };

    useEffect(() => {
        getDataUserById();
    }, []);

    useEffect(() => {
        if (objUser) {
            setRegisterData({
                nombre: objUser.nombre || '',
                apellido: objUser.apellido || '',
                telefono: objUser.telefono || '',
                pais: objUser.pais || '',
                // tipo: objUser.tipo || '',
                contrasenia: '',
                nuevaContrasenia: '',
                confirmarContrasenia: '',
                email: objUser.email || ''
            });
        }
    }, [objUser]);

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
        setErrors(validateUpdate({ ...registerData, [name]: value }, [name]));
    };

    const togglePasswordVisible = () => {
        setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateUpdate(registerData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
        else {
            if (registerData.contrasenia === '' && registerData.nuevaContrasenia === '' && registerData.confirmarContrasenia === '') {

                setErrors({});
                setIsSubmitting(true);
                setLoading(true);
    
                try {
                    delete registerData.contrasenia;
                    delete registerData.nuevaContrasenia;
                    delete registerData.confirmarContrasenia;
                    const data = await updateUser(registerData, id, token);
                    setUser(JSON.stringify(data));
                    Swal.fire({
                        icon: "success",
                        title: "Usuario actualizado con éxito",
                        text: "Los cambios han sido guardados",
                        timer: 3000,
                    });
                    navigate('/');
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Hubo un error!",
                        text: `${error.response.data.message}`,
                        // timer: 3000,
                    });
                } finally {
                    setIsSubmitting(false);
                    setLoading(false);
                }
            }
            else if (registerData.contrasenia === '' || registerData.nuevaContrasenia === '' || registerData.confirmarContrasenia === '') {
                return Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Debes completar todos los campos necesarios para actualizar la contraseña",
                });
            }
            else {
                setErrors({});
                setIsSubmitting(true);
                setLoading(true);
    
                try {
                    delete registerData.confirmarContrasenia;
                    const data = await updateUser(registerData, id, token);
                    setUser(JSON.stringify(data));
                    Swal.fire({
                        icon: "success",
                        title: "Usuario actualizado con éxito",
                        text: "Los cambios han sido guardados",
                        timer: 3000,
                    });
                    navigate('/');
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Hubo un error!",
                        text: `${error.response.data.message}`,
                        // timer: 3000,
                    });
                } finally {
                    setIsSubmitting(false);
                    setLoading(false);
                }
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

export default useEditRegisterForm;
