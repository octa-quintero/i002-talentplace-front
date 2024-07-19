import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Navbar, Footer } from "./pages";
import ScrollToTop from './components/Scrolltop/ScrollToTop';
import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
          <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
