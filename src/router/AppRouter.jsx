import { Route, Routes } from "react-router-dom"
import { LandingPage, AboutUs, Login, Register, Opportunities } from "../pages"
import { Dashboard } from "../pages/Dashboard/Dashboard"
import { Projects } from "../pages/Projects/Projects"

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
          {/* <Route path="public-project" element={<PublicProject />} /> */}
          {/* <Route path="edit-project" element={<EditProject />} /> */}
        </Route>
      </Routes>

    </>
  )
}
