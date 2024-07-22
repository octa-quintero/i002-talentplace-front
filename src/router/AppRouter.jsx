import { Route, Routes } from "react-router-dom"
import { LandingPage, AboutUs, Login, Register, Opportunities, PaginaEnConstruccion } from "../pages"
import { Dashboard } from "../pages/Dashboard/Dashboard"
import { Projects } from "../pages/Projects/Projects"
import Nosotros from "../pages/Nosotros/Nosotros"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<LandingPage />} /> 
        <Route path="/*" element={<LandingPage />} /> 
        <Route path="/about" element={<AboutUs />} /> npm run dev
        <Route path="/opportunities" element={<Opportunities />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/nosotros" element={<Nosotros />} />


        {/* Dashboard */}
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route path="projects" element={<Projects />} />
          {/* <Route path="public-project" element={<PublicProject />} /> */}
          {/* <Route path="edit-project" element={<EditProject />} /> */}
        </Route>

        <Route path="/nosotros" element={<PaginaEnConstruccion />} />
        <Route path="/contacto" element={<PaginaEnConstruccion />} />
        <Route path="/paginaenconstruccion" element={<PaginaEnConstruccion />} />

      </Routes>
    </>
  )
}
