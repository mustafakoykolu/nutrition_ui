import { Routes, Route } from "react-router-dom";
import Home from "../PrePages/Home";
import LoginPage from "../PrePages/LoginPage";
import RegisterPage from "../PrePages/RegisterPage";
import PreNavbar from "../Layouts/PreNavbar";
import ForgotPassword from "../PrePages/ForgotPassword";

function PreRoutes() {
  return (
    <div id="pre-page-container">
      <PreNavbar/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Giris" element={<LoginPage/>}/>
        <Route path="/Kayit" element={<RegisterPage/>}/>
        <Route path="/sifre-sifirla" element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
}
export default PreRoutes;
