import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import Layout from "./components/Layout/Layout";
import ScrollToTop from './components/Scrolltop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

          <Layout>
            <AppRouter />
          </Layout>

      </BrowserRouter>
    </>
  );
}

export default App;
