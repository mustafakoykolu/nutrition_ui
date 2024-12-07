import { Routes, Route } from "react-router-dom";
import Home from "../PrePages/Home";
import LoginPage from "../PrePages/LoginPage";
import RegisterPage from "../PrePages/RegisterPage";
import PreNavbar from "../Layouts/PreNavbar";

function PreRoutes() {
  return (
    <div id="pre-page-container">
      <PreNavbar/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Giris" element={<LoginPage/>}/>
        <Route path="/Kayit" element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}
export default PreRoutes;
