import clsx from "clsx";
import AddFoodToRecipe from "./AddFoodToRecipe";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Helpers/AuthHelper";

type Props = {
  currentMenu: string;
  foodTableList: any;
  setFoodTableList: any;
};

export default function AddRecipeFoods(props: Props) {
  const [addedFoodId, setAddedFoodId] = useState(0);
  const [addFoodDialogOpen, setAddFoodDialogOpen] = useState(false);

  const auth = useAuth();
  const [foodPortionDict, setFoodPortionDict] = useState({});

  async function getFoodById(id: number) {
    var response = await axios({
      method: "get",
      url: process.env.REACT_APP_API_URL + "/food/GetFoodById?id=" + id,
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    });
    if (response.status === 200) {
      props.setFoodTableList((prev: any) => ({
        ...prev,
        [response.data.id]: response.data,
      }));
    } else {
      console.log(response);
    }
  }
  useEffect(() => {
    if (addedFoodId !== 0) {
      getFoodById(addedFoodId);
    }
  }, [addedFoodId]);
  return (
    <div
      id="add-recipe-foods-container"
      className={clsx({ hidden: props.currentMenu !== "recipeFoods" })}
    >
      {addFoodDialogOpen && (
        <AddFoodToRecipe
          setOpen={setAddFoodDialogOpen}
          setAddedFoodId={setAddedFoodId}
        />
      )}
      <div id="header" className="flex my-5">
        <div className="flex ml-auto">
          <button
            className="ml-10 px-5 py-2.5 bg-blue-500 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
            onClick={() => setAddFoodDialogOpen(true)}
          >
            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
              Besin Ekle
            </span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full min-w-max text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border-b border-gray-300">Besin Adı</th>
              <th className="px-4 py-2 border-b border-gray-300">
                Besin Miktarı
              </th>
              <th className="px-4 py-2 border-b border-gray-300">Kalori</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.foodTableList).length === 0 && (
              <tr key={"hint"}>
                <td
                  className="px-4 py-2 border-b border-gray-300"
                  colSpan={3}
                  style={{ textAlign: "center" }}
                >
                  {
                    "Henüz bir besin eklenmedi, besin eklemek için yukarıdaki butona tıklayın."
                  }
                </td>
              </tr>
            )}
            {Object.values(props.foodTableList).map((food: any) => (
              <tr key={food.id}>
                <td className="px-4 py-2 border-b border-gray-300">
                  {food.nameTr ? food.nameTr : food.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {" "}
                  <input
                    value={food.portion}
                    onChange={(e: any) => {
                      debugger;
                      if (e.target.value > 0) {
                        let foodValues = { ...food };
                        const ratio = e.target.value / foodValues.portion;
                        Object.entries(foodValues).forEach(
                          ([key, value]: [string, any]) => {
                            if (typeof value === "number") {
                              foodValues[key] = value * ratio;
                            }
                          }
                        );
                        props.setFoodTableList((prev: any) => ({
                          ...prev,
                          [food.id]: {
                            ...foodValues,
                            portion: e.target.value,
                            id: food.id,
                          },
                        }));
                      }

                      console.log(props.foodTableList);
                    }}
                    style={{
                      width: `${Math.max((food.portion / 10) * 4, 10)}px`, // Adjust base width
                      minWidth: "30px",
                      border: "1px solid #ccc",
                      padding: "2px 4px",
                    }}
                    className="text-base text-gray-900 focus:outline focus:outline-0"
                  />
                  {" " + food.portionUnit}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {food.kCal}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"  onClick={() => {
                    // Assuming foodId is available in the scope
                    debugger
                    var x: { [key: number]: any } = {}
                    Object.values(props.foodTableList).map((foodAdded: any) => {
                      console.log(foodAdded.id)
                      if(food.id!== foodAdded.id){
                        x[foodAdded.id]= foodAdded
                      }
                    })
                    console.log(x)
                    props.setFoodTableList(x)
                  }}>
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
