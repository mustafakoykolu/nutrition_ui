import { Routes, Route } from "react-router-dom";
import Home from "../PrePages/Home";
import LoginPage from "../PrePages/LoginPage";
import RegisterPage from "../PrePages/RegisterPage";

function PreRoutes() {
  return (
    <div id="page-container" className="bg-slate-200">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Giris" element={<LoginPage/>}/>
        <Route path="/Kayit" element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}
export default PreRoutes;
