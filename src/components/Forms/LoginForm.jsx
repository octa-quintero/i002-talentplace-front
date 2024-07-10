import React from "react";
import logo from '../../assets/assets-png/2.png'
import './Form.css';


const LoginForm = () => {
    return(
        <div className='container-forms container w-50 p-5 my-5'>

            <div className="container-forms-header row">
                <h2 className="col-md-10">Ingreso a cuenta</h2>
                <img src={logo} alt="Logo"></img>
            </div>

            <div className="mx-auto">

                <div className="form-group">
                    <input type="email" className="form-control p-2 my-3" placeholder="Email"></input>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control p-2 my-3" placeholder="Password"></input>
                    <small className="form-text text-muted p-2">¿Olvidaste tu contraseña?</small>
                </div>

                <div className="form-group">
                    <button className="border-0 btn-postularse w-100 p-2 my-3">Ingresar</button>
                </div>
            </div>
            <p className="mx-auto w-50 text-center">¿Aún no estás registrado? <a><strong>Registrate acá</strong></a></p>
        </div>
    )
}

export default LoginForm;