import { useLocation } from "react-router-dom";
import { Footer, Navbar } from "../../pages";
import "./Layout.css";

const Layout = ({ children }) => {

  const location = useLocation();
  //rutas padre e hijas
  const hideNavbarRoutes = location.pathname.startsWith("/dashboard");
  //ruta especifica
  // const hideNavbarRoutes = ["/dashboard"];

  return (
    <>
      {!hideNavbarRoutes && <Navbar />}
      <div className="main-layout-content">{children}</div>
      {!hideNavbarRoutes && <Footer />}
    </>
  );
};

export default Layout;
