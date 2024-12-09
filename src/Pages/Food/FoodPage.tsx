import FoodCard from "./FoodCard";

export default function FoodPage() {
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
          <button className="ml-10 px-5 py-2.5 bg-gray-800 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
              Yeni Besin Ekle
            </span>
          </button>
        </div>
      </div>
      <div id="body">
        <div  className="flex justify-between">
        {Array(5).fill(1)
        .map(() => (
          <FoodCard />
        ))}
        
        </div>
        <div  className="flex justify-between">
        {Array(5).fill(1)
        .map(() => (
          <FoodCard />
        ))}
        </div>
      </div>
     
    </div>
  );
}
