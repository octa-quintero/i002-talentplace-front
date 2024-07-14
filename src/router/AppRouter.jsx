import { Route, Routes } from "react-router-dom"
/* jm-navbar
import { LandingPage, PrivacyPolicy, AboutUs, Login, Register,Contratar,Oportunidades,ContactUs} from "../pages"
*/

import { LandingPage, PrivacyPolicy, AboutUs, Login, Register, Opportunities } from "../pages"


export const AppRouter = () => {
  return (
    <>

    /*jm-navbar
        <Routes>
             <Route path="/home" element={<LandingPage />} /> 
             <Route path="/*" element={<LandingPage />} /> 
    
             <Route path="/nosotros" element={<AboutUs />} /> 
             <Route path="/contratar" element={<Contratar/>} /> 
             <Route path="/oportunidades" element={<Oportunidades />} /> 
             <Route path="/contacto" element={<ContactUs />} /> 
  
             <Route path="/privacy" element={<PrivacyPolicy />} /> 
             <Route path="/ingreso" element={<Login />} /> 
             <Route path="/register" element={<Register />} /> 
        </Routes>
    */

      <Routes>
        <Route path="/home" element={<LandingPage />} /> 
        <Route path="/*" element={<LandingPage />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/opportunities" element={<Opportunities />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/opportunities" element={<Opportunities />} />
      </Routes>

    </>
  )
}
