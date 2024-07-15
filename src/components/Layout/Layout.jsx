import { useLocation } from "react-router-dom";
import { Footer, Navbar } from "../../pages";
import "./Layout.css";

const Layout = ({ children }) => {

  const location = useLocation();
  const hideNavbarRoutes = ["/projects"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
