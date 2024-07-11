import React, { useState } from "react";
import './Form.css';
import logo from '../../assets/assets-png/2.png'


const RegisterForm = () => {
    const [registerData, setRegisterData] = useState({
        name: '',
        surname: '',
        country: '',
        telephone: '',
        search: '',
        email: '',
        password: ''
    });

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
        
        if(!registerData.name) {
            newErrors.name = "Name is required";
        }

        if(!registerData.surname) {
            newErrors.surname = "Surname is required";
        }

        if(!registerData.country) {
            newErrors.country = "Country is required";
        }

        if(!registerData.telephone) {
            newErrors.telephone = "Telephone is required";
        } else if (!/^\d{10}$/.test(registerData.telephone)) {
            newErrors.password = 'Telephone must contain 10 digits';
        }

        if(!registerData.search) {
            newErrors.search = "Search is required";
        }

        if(!registerData.email) {
            newErrors.email = "Email is required";
        } else if(!/\S+@\S+\.\S+/.test(registerData.email)) {
            newErrors.email = "Email format is invalid";
        }

        if(!registerData.password) {
            newErrors.password = "Password is required";
        } else if(registerData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(registerData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(registerData.password)) {
            newErrors.password = 'Password must contain at least one number';
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setIsSubmitting(true);
            console.log("Register data submitted:\n",registerData);
            
            // TODO Backend connection to send register data
            setTimeout(() => {
                setIsSubmitting(false);
            }, 20000); // Simulating a network request while not connected to backend
        }
    }

    return(
        <form onSubmit={handleSubmit} className='container-forms container w-50 p-5 my-5'>

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
                            name="name" 
                            value={registerData.name} 
                            onChange={handleChange}
                        />
                        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                    </div>

                    <div className="form-group col-md-6">
                        <input 
                            type="text" 
                            className="form-control p-2 my-3" 
                            placeholder="Apellido" 
                            name="surname" 
                            value={registerData.surname} 
                            onChange={handleChange}
                        />
                        {errors.surname && <p style={{color: 'red'}}>{errors.surname}</p>}
                    </div>
                </div>

                <div className="form-group">
                    <select 
                        className="form-control p-2 mt-3"
                        name="country"
                        value={registerData.country}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione su país</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Chile">Chile</option>
                        <option value="Brasil">Brasil</option>
                    </select>
                    {errors.country && <p style={{color: 'red'}}>{errors.country}</p>}
                    <small className="form-text text-muted p-2">Actualmente sólo tenemos disponibilidad en Latinoamérica</small>
                </div>

                <div className="form-group">
                    <input 
                        type="tel" 
                        className="form-control p-2 my-3" 
                        placeholder="Ingrese un teléfono" 
                        name="telephone" 
                        value={registerData.telephone} 
                        onChange={handleChange}
                    />
                    {errors.telephone && <p style={{color: 'red'}}>{errors.telephone}</p>}
                </div>

                <div className="form-group">
                    <select 
                        className="form-control p-2 mt-3"
                        name="search"
                        value={registerData.search}
                        onChange={handleChange}    
                    >
                        <option value="">Busco</option>
                        <option value="trabajar">Trabajar</option>
                        <option value="contratar">Contratar</option>
                    </select>
                    {errors.search && <p style={{color: 'red'}}>{errors.search}</p>}
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

                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control p-2 my-3" 
                        placeholder="Password" 
                        name="password" 
                        value={registerData.password} 
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                </div>

                <div className="form-group">
                    <button 
                        className="border-0 btn-postularse w-100 p-2 my-3" 
                        type="submit"
                        disabled={isSubmitting}
                    >Registrarse</button>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm;