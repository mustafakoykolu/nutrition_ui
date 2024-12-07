import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Navbar from "../Layouts/Navbar";
import ShoppingList from "../Pages/ShoppingList";
import Calory from "../Pages/Calory";
import FoodList from "../Pages/FoodList";
import SocialMedia from "../Pages/SocialMedia";
import SocialMediaPost from "../Pages/SocialMediaPost";
function PrivateRoutes() {
  return (
    <div id="page-container">
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/alisveris-listem" element={<ShoppingList />} />
        <Route path="/kalori-takip" element={<Calory />} />
        <Route path="/yemek-listem" element={<FoodList />} />
        <Route path="/sosyal-medyam" element={<SocialMedia />} />
        <Route path="/sosyal-medyam/gonderi" element={<SocialMediaPost/>} />
      </Routes>
    </div>
  );
}
export default PrivateRoutes;
