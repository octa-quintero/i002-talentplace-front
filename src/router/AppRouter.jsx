import { Route, Routes } from "react-router-dom"
import { LandingPage, AboutUs, Login, Register, Opportunities, PaginaEnConstruccion, Dashboard, Projects, Nosotros, MainFreelancer, MainEmpresa, PostulacionesFreelancer } from "../pages"
import ProjectEdit from "../components/ProjectEdit/ProjectEdit"
import { EditProfile } from "../components/EditProfile/EditProfile"
import { DashboardRedirection } from "../pages/Dashboard/DashboardRedirection"


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
        <Route path="/nosotros" element={<Nosotros />} />


        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardRedirection />}/>
        <Route path="dashboard/*" element={<Dashboard />}>

          {/* <Route path="empresa" element={<MainEmpresa />} /> */}

          {/* <Route path="junior" element={<MainFreelancer />} /> */}
          <Route path="junior/proyectos" element={<PostulacionesFreelancer />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/edit/:projectId" element={<ProjectEdit />} />
          {/* <Route path="public-project" element={<PublicProject />} /> */}
        </Route>

        <Route path="/contacto" element={<PaginaEnConstruccion />} />
        <Route path="/paginaenconstruccion" element={<PaginaEnConstruccion />} />
        <Route path="/editprofile" element={<EditProfile />} />

      </Routes>
    </>
  )
}
