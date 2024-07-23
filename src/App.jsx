import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Navbar, Footer } from "./pages";
import ScrollToTop from './components/Scrolltop/ScrollToTop';
import "./App.css";
import HeaderDash from './components/HeaderDash/HeaderDash';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <div className="main-content">
          <AppRouter />
        </div>
        <div>
          <HeaderDash/>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
