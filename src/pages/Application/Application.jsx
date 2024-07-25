import { useNavigate } from "react-router-dom";
import { Application } from "../../components/Application/Application"
import { useUserContext } from "../../context/UserProvider";
import { useEffect } from "react";

export const ApplicationJunior = () => {

    const { user } = useUserContext();
    const userContext = user ? JSON.parse(user) : null;
    const navigate = useNavigate();

    useEffect(() => {
        if (!userContext) {
          navigate('/login');
        }
      }, [userContext, navigate]);
    
      return userContext ? <Application /> : null;
}