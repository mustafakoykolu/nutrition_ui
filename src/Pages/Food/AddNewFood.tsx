import basket from "../../assets/Images/basket.png";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import FoodDetailValue from "./FoodDetailValue";
import { useState } from "react";
import FoodBenefits from "./FoodBenefits";
import FoodHistory from "./FoodHistory";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AddNewFood() {
  const [currentMenu, setCurrentMenu] = useState("foodValue");
  const [file, setFile] = useState<string>(basket);
  function handleChange(e:any) {
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div id="myprofile-page-container">
      <div className="my-20 w-4/6">
      <label htmlFor="imgInput">  <img
          alt="food image"
          className="absolute inset-x-0 shadow-xl bg-white h-80 mx-auto  rounded-full "
          src={file}
        /></label>
      </div>
      <div className="h-40 bg-gray-800 w-4/6  mx-auto "></div>
      <div className="h-40 bg-white w-4/6 mx-auto bg-white"></div>
      <div className="w-full flex justify-center">
        <div className="max-w rounded overflow-hidden bg-white shadow-lg w-4/6  ">
          <div className="px-6 py-4">
            <div className="flex justify-center">
              <input
                type="file"
                id="imgInput"
                onChange={handleChange}
                className="hidden"
              />
            </div>
            <div className="font-bold text-xl mb-2 text-center">Ananas</div>
            <div className="w-6/6 mx-auto mb-5">
              <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-center">
                  <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center justify-center">
                      <div className="flex justify-between space-x-4">
                        <Link
                          key={"foodValue"}
                          className={classNames(
                            currentMenu === "foodValue"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          to={"#"}
                          onClick={() => setCurrentMenu("foodValue")}
                        >
                          {"Besin Değerleri"}
                        </Link>
                        <Link
                          key={"benefits"}
                          className={classNames(
                            currentMenu === "benefits"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          to={"#"}
                          onClick={() => setCurrentMenu("benefits")}
                        >
                          {"Faydaları"}
                        </Link>
                        <Link
                          key={"history"}
                          className={classNames(
                            currentMenu === "history"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          to={"#"}
                          onClick={() => setCurrentMenu("history")}
                        >
                          {"Tarihçesi"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure>
            </div>
            {currentMenu === "foodValue" && <FoodDetailValue />}
            {currentMenu === "benefits" && <FoodBenefits />}
            {currentMenu === "history" && <FoodHistory />}
          </div>
        </div>
      </div>
    </div>
  );
}
