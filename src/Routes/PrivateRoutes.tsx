import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Navbar from "../Layouts/Navbar";
import ShoppingList from "../Pages/ShoppingList";
import Calory from "../Pages/Calory";
import FoodList from "../Pages/FoodList";
function PrivateRoutes() {
  return (
    <div id="page-container" className="bg-slate-200">
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/alisveris-listem" element={<ShoppingList />} />
        <Route path="/kalori-takip" element={<Calory />} />
        <Route path="/yemek-listem" element={<FoodList />} />
      </Routes>
    </div>
  );
}
export default PrivateRoutes;
