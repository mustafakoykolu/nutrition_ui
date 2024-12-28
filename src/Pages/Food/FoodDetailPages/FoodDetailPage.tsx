import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link, useLocation } from "react-router-dom";
import FoodDetailValue from "./FoodDetailValue";
import { useEffect, useState } from "react";
import FoodBenefits from "./FoodBenefits";
import FoodHistory from "./FoodHistory";
import axios from "axios";
import { useAuth } from "../../../Helpers/AuthHelper";
import { FoodType } from "../../../Models/FoodType";
import happyFoodImage from "../../../assets/Images/happyFood.webp";
import { LoadingCarousel } from "../../../Layouts/LoadingCarousel";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FoodDetailPage() {
  const location = useLocation();
  const auth = useAuth();
  const [food, setFood] = useState<FoodType | null>();
  const [loading, setLoading] = useState(false)

  async function getFoodById(id: string) {
    setLoading(true)
    var response = await axios({
      method: "get",
      url: process.env.REACT_APP_API_URL + "/food/GetFoodById?id=" + id,
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    });
    if (response.status === 200) {
      setFood(response.data);
    } else {
      setFood(null);
    }
    setLoading(false)
  }
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    if (id) {
      getFoodById(id);
    }
  }, []);
  const [currentMenu, setCurrentMenu] = useState("foodValue");

  return (
    <div id="food-detail-page-container">
      {food != null ? (
        <div>
          <div className="my-20 w-4/6">
            <img
              className="absolute inset-x-0 shadow-xl bg-white h-80 mx-auto  rounded-full"
              src={
                food.imageName
                  ? process.env.REACT_APP_IMAGES_URL + food.imageName
                  : happyFoodImage
              }
              alt="foodImage"
            />
          </div>
          <div className="h-40 bg-gray-800 w-4/6  mx-auto "></div>
          <div className="h-40 bg-white w-4/6 mx-auto bg-white"></div>
          <div className="w-full flex justify-center">
            <div className="max-w rounded overflow-hidden bg-white shadow-lg w-4/6 mb-20 ">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  {food?.nameTr}
                </div>
                <div className="w-6/6 mx-auto mb-5">
                  <Disclosure as="nav" className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex sm:justify-center justify-between">
                      <div className="relative flex h-16 items-center sm:justify-center justify-between w-full">
                        <div className="inset-y-0 left-0 flex items-center sm:hidden">
                          {/* Mobile menu button*/}
                          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                              aria-hidden="true"
                              className="block size-6 group-data-[open]:hidden"
                            />
                            <XMarkIcon
                              aria-hidden="true"
                              className="hidden size-6 group-data-[open]:block"
                            />
                          </DisclosureButton>
                        </div>
                        <Link
                          key={"foodValue"}
                          className={classNames(
                            currentMenu === "foodValue"
                              ? "sm:hidden bg-gray-900 text-white"
                              : "hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          to={"#"}
                        >
                          {"Besin Değerleri"}
                        </Link>
                        <Link
                          key={"benefits"}
                          className={classNames(
                            currentMenu === "benefits"
                              ? " sm:hidden  bg-gray-900 text-white"
                              : " hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          to={"#"}
                        >
                          {"Faydaları"}
                        </Link>
                        <Link
                          key={"history"}
                          className={classNames(
                            currentMenu === "history"
                              ? " sm:hidden  bg-gray-900 text-white"
                              : " hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          to={"#"}
                        >
                          {"Tarihçesi"}
                        </Link>
                        <div className=" hidden sm:ml-6 sm:block flex items-center justify-center">
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
                    {/* Mobile menus*/}
                    <DisclosurePanel className="sm:hidden">
                      <div className="space-y-1 px-2 pb-3 pt-2">
                        <DisclosureButton
                          key={"foodValue"}
                          as="a"
                          href={"#"}
                          aria-current={
                            currentMenu === "foodValue" ? "page" : undefined
                          }
                          className={classNames(
                            currentMenu === "foodValue"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                          onClick={() => setCurrentMenu("foodValue")}
                        >
                          {"Besin Değerleri"}
                        </DisclosureButton>
                        <DisclosureButton
                          key={"benefits"}
                          as="a"
                          href={"#"}
                          aria-current={false ? "page" : undefined}
                          className={classNames(
                            currentMenu === "benefits"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                          onClick={() => setCurrentMenu("benefits")}
                        >
                          {"Faydaları"}
                        </DisclosureButton>
                        <DisclosureButton
                          key={"history"}
                          as="a"
                          href={"#"}
                          aria-current={
                            currentMenu === "history" ? "page" : undefined
                          }
                          className={classNames(
                            currentMenu === "history"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                          onClick={() => setCurrentMenu("history")}
                        >
                          {"Tarihçesi"}
                        </DisclosureButton>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
                {currentMenu === "foodValue" && <FoodDetailValue food={food} />}
                {currentMenu === "benefits" && <FoodBenefits benefits={food.benefits}/>}
                {currentMenu === "history" && <FoodHistory history={food.history} />} 
              </div>
            </div>
          </div>
        </div>
      ) : loading ?   <LoadingCarousel/> : (
        
        <div>
          Aradığınız besini bulamadık. Lütfen girmiş olduğunuz besin id'sini
          kontrol ediniz :/
        </div>
      )}
    </div>
  );
}
