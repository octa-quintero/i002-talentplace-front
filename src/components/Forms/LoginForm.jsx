import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/assets-png/2.png';
import axios from 'axios';
import './Form.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useUserContext } from "../../context/UserProvider";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const LoginForm = () => {

    const { setUser, setToken } = useUserContext();

    const [loginData, setLoginData] = useState({
        email: '',
        contrasenia: ''
    });
    const [inputType, setInputType] = useState("password");


    const [errors, setErrors] = useState({});


    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };


    const validate = () => {
        const newErrors = {};

        if(!loginData.email) {
            newErrors.email = "Email is required";
        } else if(!/.+@.+\.[A-Za-z]+$/.test(loginData.email)) {
            newErrors.email = "Email format is invalid";
        }

        if(!loginData.contrasenia) {
            newErrors.contrasenia = "Password is required";
        } else if(loginData.contrasenia.length < 8) {
            newErrors.contrasenia = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(loginData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(loginData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one number';
        }

        return newErrors;
    }

    // funcion que cambia el type del input
    const togglePasswordVisible = () => {
        setInputType((toogleType) => (toogleType === 'password' ? 'text' : 'password'));
    }

    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validate();
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else{
            setErrors({});
            setIsSubmitting(true);

            // Backend connection to send login data
            axios.post(`${BACKEND_URL}/auth/login`, loginData)
                .then((loginData) => {

                    //logica temporal para guardar el token y los datos del user
                    const token = loginData.data.refreshToken;
                    const userInfo = loginData.data.user;
                    const currentUser = JSON.stringify(userInfo);
                    setUser(currentUser);
                    localStorage.setItem("user", currentUser);
                    setToken(token);
                    localStorage.setItem("token", token);

                    // DONE connected to backend
                    // TODO redirect to dashboard & send data from server
                    console.log(loginData.data);

                    /* 200 OK -> loginData.data
                    {
                        "message": "Inicio de sesión exitoso",
                        "refreshToken": "xxx",
                        "user": {
                            "id": "xxx",
                            "nombre": "Johhny Melavo",
                            "email": "johnny@melavo.com",
                            "tipo": "empresa"
                        }
                    }*/
                    
                })
                .catch((err) => {
                    console.log(err);
                })

            console.log('Login data submitted:\n', loginData);
        }
    }
    
    return(
        <form id="login-form" onSubmit={handleSubmit} className='container-forms container p-5 my-5 form-width'>

            <div className="container-forms-header row">
                <h2 className="col-md-10">Ingreso a cuenta</h2>
                <img src={logo} alt="Logo"></img>
            </div>

            <div className="mx-auto">

                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control p-2 my-3" 
                        name="email" 
                        placeholder="Email" 
                        value={loginData.email} 
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                </div>

                <div className="form-group form-group-password">
                    <input 
                        type={inputType}
                        className="form-control p-2 my-3" 
                        name="contrasenia" 
                        placeholder="Password" 
                        value={loginData.contrasenia} 
                        onChange={handleChange}
                    />
                    <btn className="ioEye" type="button" onClick={togglePasswordVisible}>
                        {inputType==="password" ? <IoEye /> : <IoEyeOff />}
                    </btn>
                    {errors.contrasenia && <p style={{color: 'red'}}>{errors.contrasenia}</p>}
                    <small className="form-text text-muted p-2">¿Olvidaste tu contraseña?</small>
                </div>

                <div className="form-group">
                    <button 
                        className="border-0 button primary w-100 p-2 my-3" 
                        type="submit"
                        disabled={isSubmitting}
                    >Ingresar</button>
                </div>
            </div>
            <p className="mx-auto w-50 text-center">¿Aún no estás registrado?&nbsp;
                <br />
                <NavLink to="/register">
                    <strong>Registrate acá</strong>
                </NavLink> 
            </p>
        </form>
    )
}

export default LoginForm;