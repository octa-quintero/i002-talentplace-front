import { Route, Routes } from "react-router-dom"
import { LandingPage, AboutUs, Login, Register, Opportunities } from "../pages"
import { SideBar } from "../pages/SideBar/SideBar"

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
        {/* SideBar */}
        <Route path="/projects" element={<SideBar />} />
      </Routes>

    </>
  )
}
