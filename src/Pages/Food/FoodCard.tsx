import nutritionist from "../../assets/Images/nutritionist.png";
import { useNavigate } from "react-router-dom";

export default function FoodCard() {
  const navigate = useNavigate()
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-10 mr-10 mt-10">
      <img
        className="w-full"
        src={nutritionist}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Besin Değerleri</div>
        <div className="grid grid-rows-2 grid-col-2 gap-2">
          <div className="row-span-1 col-span-1 font-bold ">Kalori:</div>
          <div className="row-span-1 col-span-1 col-start-2  ">150 kcal</div>
          <div className="row-span-1 col-span-1 font-bold ">Karbonhidrat:</div>
          <div className="row-span-1 col-span-1 col-start-2 ">150 g</div>
          <div className="row-span-1 col-span-1 font-bold ">Protein:</div>
          <div className="row-span-1 col-span-1 col-start-2 ">150 g</div>
          <div className="row-span-1 col-span-1 font-bold ">Yağ:</div>
          <div className="row-span-1 col-span-1 col-start-2 ">150 g</div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Karbonhidrat
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Protein
        </span>
        <button className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white ml-auto mb-2 hover:bg-blue-500" onClick={()=>{
          navigate("/yemek-listem/besin-detay")
        }}>
          <span>detay</span>
        </button>
      </div>
    </div>
  );
}
