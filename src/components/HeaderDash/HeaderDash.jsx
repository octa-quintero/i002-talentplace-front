import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./HeaderDash.css";
import Button from '../Button/Button';
import { FaEnvelope } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import profile from '../../assets/assets-img/man-profile.jpeg';
import { useUserContext } from '../../context/UserProvider';


// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const HeaderDash = () => {
  const [rutaDashboard, setRutaDashboard] = useState({
    ruta: 'Hola',
    perfil: '',
    nombreEmpresa: '',
  });
  const { token, setToken, setUser, user } = useUserContext();
  const recoverUser = JSON.parse(user)
  const recoverUserId = recoverUser.id
  console.log(recoverUserId);
  console.log(recoverUser);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // const userId = localStorage.getItem('userId');
        if (!recoverUserId) {
          console.error("No user ID found in local storage");
          return;
        }

        // const response = await axios.get(`${BACKEND_URL}/api/usuarios/${userId}`);
        // const user = response.data;

        const nombreEmpresa = recoverUser.nombre.length > 0 ? recoverUser.nombre[0] : 'No tiene empresa';

        setRutaDashboard({
          ruta: 'Dashboard',
          perfil: recoverUser.nombre,
          nombreEmpresa: nombreEmpresa,
        });
      } catch (error) {
        console.error("Error fetching the dashboard route data:", error);
      }
    };

    fetchData();
  }, []);

  const renderHeading = () => {
    if (rutaDashboard.ruta === 'Dashboard') {
      return `¡Bienvenido ${rutaDashboard.perfil} de ${rutaDashboard.nombreEmpresa}`;
    }
    return rutaDashboard.ruta;
  };

  return (
    <header className='headerDash container-fluid'>
      <h3>{renderHeading()}</h3>
      <div className='icon-buttons'>
        <Button type='dash user'>
          <img src={profile} alt="Profile image" />
        </Button>
        <Button type="primary dash">
          <FaEnvelope className='icono' style={{ strokeWidth: 20 }} />
        </Button>
        <Button type="primary dash">
          <MdNotifications className='icono' />
        </Button>
      </div>
    </header>
  );
};

export default HeaderDash;
