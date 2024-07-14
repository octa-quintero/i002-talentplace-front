import { Route, Routes } from "react-router-dom"
import { LandingPage, PrivacyPolicy, AboutUs, Login, Register,Contratar,Oportunidades,ContactUs} from "../pages"

export const AppRouter = () => {
  return (
    <>
        <Routes>
             <Route path="/home" element={<LandingPage />} /> 
             <Route path="/*" element={<LandingPage />} /> 
    /*estan en el*/
             <Route path="/nosotros" element={<AboutUs />} /> 
             <Route path="/contratar" element={<Contratar/>} /> 
             <Route path="/oportunidades" element={<Oportunidades />} /> 
             <Route path="/contacto" element={<ContactUs />} /> 
  /*--*/
             <Route path="/privacy" element={<PrivacyPolicy />} /> 
             <Route path="/ingreso" element={<Login />} /> 
             <Route path="/register" element={<Register />} /> 
        </Routes>
    </>
  )
}
