// import './Form.css';
import logo from '../../assets/assets-png/2.png';
import Loading from "../../pages/shared/Loading";
import { useNavigate } from "react-router-dom";
import { usePostApplicationsById } from '../../hooks/usePostApplicationsById';

export const Application = () => {
    
    const {
        applicationData,
        errors,
        isSubmitting,
        loading,
        handleChange,
        handleSubmit
    } = usePostApplicationsById();
    const navigate = useNavigate();

    return(
        <form onSubmit={handleSubmit} className='container-forms container form-width p-5 my-5'>

            <div className="container-forms-header row">
                <h2 className="col-md-10">Postulación</h2>
                <h5 className="col-md-10">Verifica tus datos</h5>

                <img src={logo} alt="Logo"></img>
            </div>

            {loading? 
                <Loading/>
            :
                <div className="mx-auto">

                    <div className="form-row row">                    
                        <div className="form-group col-md-6">
                            <input 
                                type="text" 
                                className="form-control p-2 my-3" 
                                placeholder="Nombre" 
                                name="nombre" 
                                value={applicationData.nombre} 
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
                                value={applicationData.apellido} 
                                onChange={handleChange}
                            />
                            {errors.apellido && <p style={{color: 'red'}}>{errors.apellido}</p>}
                        </div>
                    </div>

                    <div className="form-group">
                        <select 
                            className="form-control p-2 mt-3"
                            name="pais"
                            value={applicationData.pais}
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
                            value={applicationData.telefono} 
                            onChange={handleChange}
                        />
                        {errors.telefono && <p style={{color: 'red'}}>{errors.telefono}</p>}
                    </div>

                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control p-2 my-3" 
                            placeholder="Email" 
                            name="email" 
                            value={applicationData.email} 
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                    </div>

                    <div className="form-group d-flex justify-content-between">
                        <button 
                            className="border-0 button primary-outline w-25 p-2 my-3" 
                            type="button"
                            onClick={ ()=> navigate(-1) }
                        >Volver atras</button>
                        <button 
                            className="border-0 button primary w-25 p-2 my-3" 
                            type="submit"
                            disabled={isSubmitting}
                        >Postular</button>
                    </div>
                </div>
            }
        </form>
    )
};