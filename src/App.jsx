// Dejar bootstrap estilo arriba de todo
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import Layout from "./components/Layout/Layout";
import ScrollToTop from './components/Scrolltop/ScrollToTop';
import "./App.css";
import HeaderDash from './components/HeaderDash/HeaderDash';


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="main-content">
          <AppRouter />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
