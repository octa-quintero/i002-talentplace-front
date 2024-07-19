import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

import Layout from "./components/Layout/Layout";

// import { Navbar, Footer } from "./pages";
import ScrollToTop from './components/Scrolltop/ScrollToTop';

import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* <Layout>
          <AppRouter />
        </Layout> */}

        {/* <Navbar /> */}
        <ScrollToTop />
          <Layout>
            <AppRouter />
          </Layout>
        {/* <Footer /> */}

      </BrowserRouter>
    </>
  );
}

export default App;
