import { Route, Routes } from "react-router-dom"

import { LandingPage, PrivacyPolicy, AboutUs, Login, Register, Opportunities } from "../pages"
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
        <Route path="/project" element={<PublishProject />} />
      </Routes>
    </>
  )
}
