import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";

export const DashboardRedirection = () => {
  const { user } = useUserContext();
  const recoverUser = JSON.parse(user);
  const rol = recoverUser.tipo;

  const navigate = useNavigate();

  useEffect(() => {
    rol === "empresa" || rol === "admin" ? navigate('/dashboard/empresa') : navigate('/dashboard/junior');
  }, [rol, navigate]);

  return null;

}

