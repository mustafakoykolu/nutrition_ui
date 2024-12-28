import { useCallback, useEffect, useRef, useState } from "react";
import FoodCard from "./FoodCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Helpers/AuthHelper";
import { LoadingCarousel } from "../../Layouts/LoadingCarousel";
type Props = {
  addRecipeFood: boolean;
  setAddedFoodId?: any;
  setAddFoodDialogOpen?: any;
};
export default function FoodPage(
  props: Props = {
    addRecipeFood: false,
    setAddedFoodId: null,
    setAddFoodDialogOpen: null,
  }
) {
  const navigate = useNavigate();
  const auth = useAuth();
  const [foods, setFoods] = useState<any[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const lastFoodElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  async function getFoods(refresh: boolean = false) {
    setLoading(true);
    var response = await axios({
      method: "get",
      url: process.env.REACT_APP_API_URL + "/food/getfoods",
      params: {
        PageNumber: pageNumber,
        PageSize: 10,
      },
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    });
    if (response.status === 200) {
      if (response.data.dataCount === 10) setHasMore(true);
      else setHasMore(false);
      if(refresh){
        setFoods(() => {
          return [...response.data.data];
        });
      }
      else{
        setFoods(() => {
          return [...foods, ...response.data.data];
        });
      }
    
    } else {
      console.log(response);
      setFoods([]);
    }
    setLoading(false);
  }
  const [foodName, setFoodName] = useState("");
  async function searchFood() {
    setLoading(true);
    var response = await axios({
      method: "get",
      url: process.env.REACT_APP_API_URL + "/food/searchFood",
      params: {
        FoodName: foodName,
        PageNumber: pageNumber,
        PageSize: 10,
      },
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    });
    if (response.status === 200) {
      if (response.data.data.DataCount === 10) setHasMore(true);
      else setHasMore(false);
      setFoods(() => {
        return [...response.data.data];
      });
    } else {
      console.log(response);
      setFoods([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if(foodName !==""){
      searchFood();
    }
    else{
      getFoods();
    }
  }, [pageNumber]);
  return (
    <div id="food-page-container">
      {loading && <LoadingCarousel/> }
      <div id="header" className="flex mt-10">
        <div className="flex flex-wrap mx-auto">
        {!props.addRecipeFood && (
            <button
              className="block sm:hidden px-5 py-2.5 bg-gray-800 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex mx-auto mt-5"
              onClick={() => navigate("/besin-kalorileri/ekle")}
            >
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Yeni Besin Ekle
              </span>
            </button>
          )}
          <div className=" mx-auto bg-white flex px-1 py-1 rounded-full border border-gray-800 overflow-hidden w-full sm:w-1/2 mt-5">
            <input
              type="text"
              placeholder="Besin ara..."
              className="w-full outline-none bg-white pl-4 text-sm"
              onChange={(event)=>{setFoodName(event.target.value)}}
            />
            <button
              type="button"
              className="bg-gray-800 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
              onClick={() =>{
                setPageNumber(1)
                setFoods([])
                if(pageNumber===1){
                  if(foodName !==""){
                    searchFood()
                  }
                  else{
                    getFoods(true)
                  }
                }
              }}
            >
              Ara
            </button>
          </div>
          {!props.addRecipeFood && (
            <button
              className="hidden sm:block px-5 py-2.5 bg-gray-800 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex mx-auto mt-5 ml-5"
              onClick={() => navigate("/besin-kalorileri/ekle")}
            >
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Yeni Besin Ekle
              </span>
            </button>
          )}
        </div>
      </div>
      <div id="body">
        <div className="flex flex-wrap justify-center pb-10">
          {foods.map((food: any, index) => {
            if (foods.length === index + 1) {
              return (
                <div ref={lastFoodElementRef}>
                  <FoodCard
                    food={food}
                    addRecipeFood={props.addRecipeFood}
                    setAddedFoodId={props.setAddedFoodId}
                    setAddFoodDialogOpen={props.setAddFoodDialogOpen}
                    key={food.id}
                  />
                </div>
              );
            } else {
              return (
                <FoodCard
                  food={food}
                  addRecipeFood={props.addRecipeFood}
                  setAddedFoodId={props.setAddedFoodId}
                  setAddFoodDialogOpen={props.setAddFoodDialogOpen}
                  key={food.id}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
