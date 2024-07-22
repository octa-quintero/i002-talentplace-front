import { Route, Routes } from "react-router-dom"
import { LandingPage, AboutUs, Login, Register, Opportunities, PaginaEnConstruccion, Dashboard, Projects } from "../pages"
import ProjectEdit from "../components/ProjectEdit/ProjectEdit"

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

        {/* Dashboard */}
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route path="projects" element={<Projects />} />
          <Route path="projects/edit/:projectId" element={<ProjectEdit />} />
          {/* <Route path="public-project" element={<PublicProject />} /> */}
        </Route>

        {/* <Route path="/contratar" element={<PaginaEnConstruccion />} /> */}
        <Route path="/nosotros" element={<PaginaEnConstruccion />} />
        <Route path="/contacto" element={<PaginaEnConstruccion />} />
        <Route path="/paginaenconstruccion" element={<PaginaEnConstruccion />} />

      </Routes>
    </>
  )
}
