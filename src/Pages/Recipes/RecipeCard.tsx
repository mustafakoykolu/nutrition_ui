import tavukPilavImg from "../../assets/Images/tavukpilav.png";
import { useNavigate } from "react-router-dom";
import { MealType } from "../../Models/Meal/MealType";
import { getTotalCarbohydrate, getTotalFat } from "../Food/FoodTools";

type Props = {
  meal: MealType;
};

export default function RecipeCard(props: Props) {
  const navigate = useNavigate()
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-10 mr-10 mt-10">
      <img
        className="w-full"
        src={tavukPilavImg}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.meal.name}</div>
        <div className="grid grid-rows-2 grid-col-2 gap-2">
          <div className="row-span-1 col-span-1 font-bold ">Kalori:</div>
          <div className="row-span-1 col-span-1 col-start-2  ">{props.meal.totalNutrients.kCal } <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              kcal
            </span></div>
          <div className="row-span-1 col-span-1 font-bold ">Karbonhidrat:</div>
          <div className="row-span-1 col-span-1 col-start-2 ">{getTotalCarbohydrate(props.meal.totalNutrients.carbohydrate)/1000} <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          <div className="row-span-1 col-span-1 font-bold ">Protein:</div>
          <div className="row-span-1 col-span-1 col-start-2 ">{props.meal.totalNutrients.protein && props.meal.totalNutrients.protein/1000} <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          <div className="row-span-1 col-span-1 font-bold ">Yağ:</div>
          <div className="row-span-1 col-span-1 col-start-2 ">{getTotalFat(props.meal.totalNutrients.fat)/1000} <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          1 Porsiyon
        </span>
        <button className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white ml-auto mb-2 hover:bg-blue-500" onClick={()=>{
          navigate("/yemek-tarifleri/detay?id="+props.meal.id)
        }}>
          <span>detay</span>
        </button>
      </div>
    </div>
  );
}
