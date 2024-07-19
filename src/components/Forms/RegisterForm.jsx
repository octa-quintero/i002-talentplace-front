import React, { useState } from "react";
import './Form.css';
import logo from '../../assets/assets-png/2.png';
import axios from 'axios';
import { NavLink } from "react-router-dom";
// import { togglePasswordVisible } from "../../hooks/useVisiblePassword"
import useVisiblePassword from "../../hooks/useVisiblePassword";
import { IoEye, IoEyeOff } from "react-icons/io5";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const RegisterForm = () => {
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
     // funcion que cambia el type del input
     const togglePasswordVisible = () => {
        setInputType((toogleType) => (toogleType === 'password' ? 'text' : 'password'));
    }



    const [errors, setErrors] = useState({});


    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };


    const validate = () => {
        const newErrors = {};
        
        if(!registerData.nombre) {
            newErrors.nombre = "Name is required";
        }

        if(!registerData.apellido) {
            newErrors.apellido = "Surname is required";
        }

        if(!registerData.pais) {
            newErrors.pais = "Country is required";
        }

        if(!registerData.telefono) {
            newErrors.telefono = "Telephone is required";
        } else if (!/^\d{10}$/.test(registerData.telefono)) {
            newErrors.telefono = 'Telephone must contain 10 digits';
        }

        if(!registerData.tipo) {
            newErrors.tipo = "Type is required";
        }

        if(!registerData.email) {
            newErrors.email = "Email is required";
        } else if(!/\S+@\S+\.\S+/.test(registerData.email)) {
            newErrors.email = "Email format is invalid";
        }

        if(!registerData.contrasenia) {
            newErrors.contrasenia = "Password is required";
        } else if(registerData.contrasenia.length < 8) {
            newErrors.contrasenia = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(registerData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(registerData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one number';
        }

        return newErrors;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setIsSubmitting(true);
            
            // Backend connection to send register data
            axios.post(`${BACKEND_URL}/auth/register`, registerData)
                .then((registerData) => {


                    // DONE connected to backend
                    // TODO redirect to dashboard & send data from server
                    console.log(registerData);

                    /* 200 OK -> registerData.data
                    {
                        message: "Usuario creado exitosamente"
                    }*/

                })
                .catch((err) => {
                    console.log(err);
                })

                console.log('Register data submitted:\n', registerData);
        }
    }

    return(
        <form onSubmit={handleSubmit} className='container-forms container form-width p-5 my-5'>

            <div className="container-forms-header row">
                <h2 className="col-md-10">Crea tu cuenta</h2>
                <img src={logo} alt="Logo"></img>
            </div>

            <div className="mx-auto">

                <div className="form-row row">                    
                    <div className="form-group col-md-6">
                        <input 
                            type="text" 
                            className="form-control p-2 my-3" 
                            placeholder="Nombre" 
                            name="nombre" 
                            value={registerData.nombre} 
                            onChange={handleChange}
                        />
                        {errors.nombre && <p style={{color: 'red'}}>{errors.nombre}</p>}
                    </div>

                    <div className="form-group col-md-6">
                        <input 
                            type="text" 
                            className="form-control p-2 my-3" 
                            placeholder="Apellido" 
                            name="apellido" 
                            value={registerData.apellido} 
                            onChange={handleChange}
                        />
                        {errors.apellido && <p style={{color: 'red'}}>{errors.apellido}</p>}
                    </div>
                </div>

                <div className="form-group">
                    <select 
                        className="form-control p-2 mt-3"
                        name="pais"
                        value={registerData.pais}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione su país</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Chile">Chile</option>
                        <option value="Brasil">Brasil</option>
                    </select>
                    {errors.pais && <p style={{color: 'red'}}>{errors.pais}</p>}
                    <small className="form-text text-muted p-2">Actualmente sólo tenemos disponibilidad en Latinoamérica</small>
                </div>

                <div className="form-group">
                    <input 
                        type="tel" 
                        className="form-control p-2 my-3" 
                        placeholder="Ingrese un teléfono" 
                        name="telefono" 
                        value={registerData.telefono} 
                        onChange={handleChange}
                    />
                    {errors.telefono && <p style={{color: 'red'}}>{errors.telefono}</p>}
                </div>

                <div className="form-group">
                    <select 
                        className="form-control p-2 mt-3"
                        name="tipo"
                        value={registerData.tipo}
                        onChange={handleChange}    
                    >
                        <option value="">Busco</option>
                        <option value="junior">Trabajar</option>
                        <option value="empresa">Contratar</option>
                    </select>
                    {errors.tipo && <p style={{color: 'red'}}>{errors.tipo}</p>}
                </div>

                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control p-2 my-3" 
                        placeholder="Email" 
                        name="email" 
                        value={registerData.email} 
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                </div>

                <div className="form-group form-group-password">
                    <input 
                        type={inputType} 
                        className="form-control p-2 my-3" 
                        placeholder="Password" 
                        name="contrasenia" 
                        value={registerData.contrasenia} 
                        onChange={handleChange}
                    />
                    <btn className="ioEye" type="button" onClick={togglePasswordVisible}>
                        {inputType==="password" ? <IoEye /> : <IoEyeOff />}
                    </btn>
                    {errors.contrasenia && <p style={{color: 'red'}}>{errors.contrasenia}</p>}
                </div>

                <div className="form-group">
                    <button 
                        className="border-0 button primary w-100 p-2 my-3" 
                        type="submit"
                        disabled={isSubmitting}
                    >Registrarse</button>
                </div>
            </div>
            <p className="mx-auto w-50 text-center">¿Ya tienes una cuenta?&nbsp;
                <br />
                <NavLink to="/login">
                    <strong>Inicia sesión</strong>
                </NavLink> 
            </p>
        </form>
    )
}

export default RegisterForm;