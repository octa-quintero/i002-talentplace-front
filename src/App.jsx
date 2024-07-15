import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
