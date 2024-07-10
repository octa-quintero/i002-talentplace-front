import React from "react";
import './Form.css';
import logo from '../../assets/assets-png/2.png'


const RegisterForm = () => {
    return(
        <div className='container-forms container w-50 p-5 my-5'>

            <div className="container-forms-header row">
                <h2 className="col-md-10">Crea tu cuenta</h2>
                <img src={logo} alt="Logo"></img>
            </div>

            <div className="mx-auto">

                <div className="form-row row">                    
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control p-2 my-3" placeholder="Nombre"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control p-2 my-3" placeholder="Apellido"></input>
                    </div>
                </div>

                <div className="form-group">
                    <select class="form-control p-2 mt-3">
                        <option selected>Seleccione su país</option>
                        <option>Argentina</option>
                        <option>Uruguay</option>
                        <option>Chile</option>
                        <option>Brasil</option>
                    </select>
                    <small className="form-text text-muted p-2">Actualmente sólo tenemos disponibilidad en Latinoamérica</small>
                </div>

                <div className="form-group">
                    <input type="tel" className="form-control p-2 my-3" placeholder="Ingrese un teléfono"></input>
                </div>

                <div className="form-group">
                    <select class="form-control p-2 mt-3">
                        <option selected>Busco</option>
                        <option>Trabajar</option>
                        <option>Contratar</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control p-2 my-3" placeholder="Email"></input>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control p-2 my-3" placeholder="Password"></input>
                </div>

                <div className="form-group">
                    <button className="border-0 btn-postularse w-100 p-2 my-3">Registrarse</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;