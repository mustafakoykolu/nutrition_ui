import { Routes, Route } from "react-router-dom";
import Home from "../PrePages/Home";
import LoginPage from "../PrePages/LoginPage";
import RegisterPage from "../PrePages/RegisterPage";
import PreNavbar from "../Layouts/PreNavbar";
import ForgotPassword from "../PrePages/ForgotPassword";
import RecipePage from "../Pages/Recipes/RecipePage";
import RecipeDetailPage from "../Pages/Recipes/RecipeDetailPages/RecipeDetailPage";
import FoodPage from "../Pages/Food/FoodPage";
import FoodDetailPage from "../Pages/Food/FoodDetailPages/FoodDetailPage";

function PreRoutes() {
  return (
    <div id="pre-page-container">
      <PreNavbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Giris" element={<LoginPage />} />
        <Route path="/Kayit" element={<RegisterPage />} />
        <Route path="/sifre-sifirla" element={<ForgotPassword />} />
        <Route path="*" element={<Home />} />
        <Route path="/yemek-tarifleri" element={<RecipePage />} />
        <Route path="/yemek-tarifleri/detay" element={<RecipeDetailPage />} />
        <Route
          path="/besin-kalorileri"
          element={<FoodPage addRecipeFood={false} />}
        />
        <Route path="/besin-kalorileri/detay" element={<FoodDetailPage />} />
      </Routes>
    </div>
  );
}
export default PreRoutes;
