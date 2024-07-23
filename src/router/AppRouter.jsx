import { Route, Routes } from "react-router-dom"
import { LandingPage, AboutUs, Login, Register, Opportunities, PaginaEnConstruccion } from "../pages"
import { Dashboard } from "../pages/Dashboard/Dashboard"
import { Projects } from "../pages/Projects/Projects"
import ProjectEdit from "../components/ProjectEdit/ProjectEdit"
import PublishProject from "../pages/PublishProject/PublishProject"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<LandingPage />} /> 
        <Route path="/*" element={<LandingPage />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/opportunities" element={<Opportunities />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/opportunities" element={<Opportunities />} />

        {/* Dashboard */}
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route path="projects" element={<Projects />} />
          <Route path="projects/edit/:projectId" element={<ProjectEdit />} />
          <Route path="publish-project" element={<PublishProject />} />
        </Route>

        {/* <Route path="/contratar" element={<PaginaEnConstruccion />} /> */}
        <Route path="/nosotros" element={<PaginaEnConstruccion />} />
        <Route path="/contacto" element={<PaginaEnConstruccion />} />
        <Route path="/paginaenconstruccion" element={<PaginaEnConstruccion />} />

      </Routes>
    </>
  )
}
