import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/assets-png/2.png';
import './Form.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import useLoginForm from '../../hooks/useLoginForm';
import Loading from "../../pages/shared/Loading";


const LoginForm = () => {

    const {
        loginData,
        inputType,
        errors,
        isSubmitting,
        loading,
        handleChange,
        togglePasswordVisible,
        handleSubmit,
    } = useLoginForm();

    return(
        <form id="login-form" onSubmit={handleSubmit} className='container-forms container p-5 my-5 form-width'>

            <div className="container-forms-header row">
                <h2 className="col-md-10">Ingreso a cuenta</h2>
                <img src={logo} alt="Logo"></img>
            </div>

            {loading? 
                <Loading /> 
            :
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
                        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
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
                        {/* Boton para mostrar u ocultar la contraseña */}
                        <button className="ioEye" type="button" onClick={togglePasswordVisible}>
                            {inputType==="password" ? <IoEye /> : <IoEyeOff />}
                        </button>
                        {errors.contrasenia && <p style={{color: 'red'}}>{errors.contrasenia}</p>}
                        <NavLink to="/paginaenconstruccion" className="text-decoration-none">
                            <small className="form-text text-muted p-2">¿Olvidaste tu contraseña?</small>    
                        </NavLink>
                    </div>

                    <div className="form-group">
                        <button
                            className="border-0 button primary w-100 p-2 my-3" 
                            type="submit"
                            disabled={isSubmitting}
                        >Ingresar</button>
                    </div>
                </div>
            }


            <p className="mx-auto w-50 text-center">¿Aún no estás registrado?&nbsp;
                <br />
                <NavLink to="/register" className="text-decoration-none">
                    <strong>Registrate acá</strong>
                </NavLink> 
            </p>
        </form>
    )
}

export default LoginForm;