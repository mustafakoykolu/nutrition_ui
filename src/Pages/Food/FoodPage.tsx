import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Helpers/AuthHelper";

export default function FoodPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [foods, setFoods] = useState([]);

  async function getFoods() {
    var response = await axios({
      method: "get",
      url: process.env.REACT_APP_API_URL + "/food/getfoods",
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    });
    if (response.status === 200) {
      console.log(response);
      setFoods(response.data);
    } else {
      console.log(response);
      setFoods([]);
    }
  }

  useEffect(() => {
    //get foods
    getFoods();
  }, []);
  return (
    <div id="food-page-container">
      <div id="header" className="flex mt-10">
        <div className="flex mx-auto">
          <div className="bg-white flex px-1 py-1 rounded-full border border-gray-800 overflow-hidden max-w-md mr-10">
            <input
              type="email"
              placeholder="Besin ara..."
              className="w-full outline-none bg-white pl-4 text-sm"
            />
            <button
              type="button"
              className="bg-gray-800 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
            >
              Ara
            </button>
          </div>
          <button
            className="ml-10 px-5 py-2.5 bg-gray-800 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
            onClick={() => navigate("/besin-kalorileri/ekle")}
          >
            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
              Yeni Besin Ekle
            </span>
          </button>
        </div>
      </div>
      <div id="body">
        <div className="flex flex-wrap justify-center pb-10">
          {foods.map((food) => (
            <FoodCard food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
