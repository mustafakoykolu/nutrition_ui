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
import FoodDetailPage from "../Pages/Food/FoodDetailPages/FoodDetailPage";
import AddNewFood from "../Pages/Food/AddFoodPages/AddNewFood";
import Recipes from "../Pages/Recipes/Recipes";
import RecipeDetailPage from "../Pages/Recipes/RecipeDetailPages/RecipeDetailPage";
import AddNewRecipe from "../Pages/Recipes/AddRecipePages/AddNewRecipe";
function PrivateRoutes() {
  return (
    <div id="page-container">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/alisveris-listem" element={<ShoppingList />} />
        <Route path="/kalori-takip" element={<Calory />} />

        {/*Yemek Tarifleri*/}
        <Route path="/yemek-tarifleri" element={<Recipes />} />
        <Route path="/yemek-tarifleri/detay" element={<RecipeDetailPage />} />
        {/*Yemek Tarifleri ekle*/}
        <Route path="/yemek-tarifleri/ekle" element={<AddNewRecipe />} />

        {/*Besin Kalori Takip*/}
        <Route path="/besin-kalorileri" element={<FoodPage addRecipeFood={false}/>} />
        <Route path="/besin-kalorileri/ekle" element={<AddNewFood />} />
        <Route path="/besin-kalorileri/detay" element={<FoodDetailPage />} />

        {/*Sosyal Medya*/}
        <Route path="/sosyal-medyam" element={<SocialMedia />} />
        <Route path="/sosyal-medyam/gonderi" element={<SocialMediaPost />} />
        <Route
          path="/sosyal-medyam/gonderi-olustur"
          element={<CreateAPost />}
        />
        <Route path="/profilim" element={<MyProfile />} />
      </Routes>
    </div>
  );
}
export default PrivateRoutes;
