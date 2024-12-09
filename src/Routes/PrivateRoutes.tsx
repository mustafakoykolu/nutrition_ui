import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Navbar from "../Layouts/Navbar";
import ShoppingList from "../Pages/ShoppingList";
import Calory from "../Pages/Calory";
import FoodList from "../Pages/FoodList";
import SocialMedia from "../Pages/SocialMedia/SocialMedia";
import SocialMediaPost from "../Pages/SocialMedia/SocialMediaPost";
import CreateAPost from "../Pages/SocialMedia/CreateAPost";
import MyProfile from "../Pages/Profile/MyProfile";
import FoodPage from "../Pages/Food/FoodPage";
function PrivateRoutes() {
  return (
    <div id="page-container">
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/alisveris-listem" element={<ShoppingList />} />
        <Route path="/kalori-takip" element={<Calory />} />
        <Route path="/yemek-listem" element={<FoodList />} />
        <Route path="/yemek-listem/besinler" element={<FoodPage />} />
        <Route path="/sosyal-medyam" element={<SocialMedia />} />
        <Route path="/sosyal-medyam/gonderi" element={<SocialMediaPost/>} />
        <Route path="/sosyal-medyam/gonderi-olustur" element={<CreateAPost/>} />
        <Route path="/profilim" element={<MyProfile/>} />
      </Routes>
    </div>
  );
}
export default PrivateRoutes;
