import { Route, Routes } from "react-router-dom"

import { LandingPage, PrivacyPolicy, AboutUs, Login, Register, Opportunities, PaginaEnConstruccion } from "../pages"


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
        <Route path="/contratar" element={<PaginaEnConstruccion />} />
        <Route path="/nosotros" element={<PaginaEnConstruccion />} />
        <Route path="/contacto" element={<PaginaEnConstruccion />} />
        <Route path="/paginaenconstruccion" element={<PaginaEnConstruccion />} />
      </Routes>
    </>
  )
}
