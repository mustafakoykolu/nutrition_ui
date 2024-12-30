import { useNavigate } from "react-router-dom";
import { FoodType } from "../../Models/Food/FoodType";

import foodPlaceholderImage from "../../assets/Images/happyFood.png";
import { useEffect } from "react";
import { getTotalCarbohydrate, getTotalFat } from "./FoodTools";

type Props = {
  food: FoodType;
  addRecipeFood: boolean;
  setAddedFoodId?: any;
  setAddFoodDialogOpen?: any;
};
export default function FoodCard(props: Props) {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-10 mr-10 mt-10">
      <img
        className="w-full"
        src={
          props.food.imageName
            ? process.env.REACT_APP_IMAGES_URL + props.food.imageName
            : foodPlaceholderImage
        }
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.food.nameTr}</div>
        <div className="grid grid-rows-2 grid-col-2 gap-2">
          <div className="row-span-1 col-span-1 font-bold ">Kalori:</div>
          <div className="row-span-1 col-span-1 col-start-2  ">
            {props.food.kCal} <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              kcal
            </span>
          </div>
          <div className="row-span-1 col-span-1 font-bold ">Karbonhidrat:</div>
          <div className="row-span-1 col-span-1 col-start-2 "> {(getTotalCarbohydrate(props.food.carbohydrate)/1000).toFixed(2)} <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          <div className="row-span-1 col-span-1 font-bold ">Protein:</div>
          <div className="row-span-1 col-span-1 col-start-2 ">
            {props.food.protein &&  (props.food.protein/1000).toFixed(2)} <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>
          <div className="row-span-1 col-span-1 font-bold ">Yağ:</div>
          <div className="row-span-1 col-span-1 col-start-2 ">
            {(getTotalFat(props.food.fat)/1000).toFixed(2)} <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          1 Porsiyon = {props.food.portion + " " + props.food.portionUnit}
        </span>
        {props.addRecipeFood ? (
          <button
            className="inline-block bg-blue-500  rounded-full px-3 py-1 text-sm font-semibold text-white ml-auto mb-2 hover:bg-blue-500"
            onClick={() => {
              props.setAddedFoodId(props.food.id)
              props.setAddFoodDialogOpen(false);
            }}
          >
            <span>ekle</span>
          </button>
        ) : (
          <button
            className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white ml-auto mb-2 hover:bg-blue-500"
            onClick={() => {
              navigate("/besin-kalorileri/detay?id="+props.food.id)
            }}
          >
            <span>detay</span>
          </button>
        )}
      </div>
    </div>
  );
}
