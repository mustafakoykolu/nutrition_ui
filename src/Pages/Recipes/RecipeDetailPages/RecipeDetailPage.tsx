import { useEffect, useState } from "react";
import tavukPilavImg from "../../../assets/Images/tavukpilav.png";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link, useLocation } from "react-router-dom";
import RecipeDetailValue from "./RecipeDetailValue";
import RecipeBenefits from "./RecipeBenefits";
import RecipeHistory from "./RecipeHistory";
import Recipe from "./Recipe";
import axios from "axios";
import { useAuth } from "../../../Helpers/AuthHelper";
import { FoodType } from "../../../Models/Food/FoodType";
import { MealType } from "../../../Models/Meal/MealType";
import { LoadingCarousel } from "../../../Layouts/LoadingCarousel";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RecipeDetailPage() {
  const location = useLocation();
  const auth = useAuth();
  const [meal, setMeal] = useState<MealType | null>();
  const [loading, setLoading] = useState(false);

  async function getMealById(id: string) {
    setLoading(true);
    var response = await axios({
      method: "get",
      url: process.env.REACT_APP_API_URL + "/meal/GetMealById?id=" + id,
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    });
    if (response.status === 200) {
      setMeal(response.data);
    } else {
      setMeal(null);
    }
    setLoading(false);
  }
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    if (id) {
      getMealById(id);
    }
  }, []);
  const [currentMenu, setCurrentMenu] = useState("recipe");

  return (
    <div id="food-detail-page-container">
      {meal != null ? (
        <div>
          <div className="my-20 w-4/6">
            <img
              className="absolute inset-x-0 shadow-xl bg-white h-80 mx-auto  rounded-full"
              src={
                meal.imagePath
                  ? process.env.REACT_APP_IMAGES_URL + meal.imagePath
                  : tavukPilavImg
              }
              alt="food-image"
            />
          </div>
          <div className="h-40 bg-gray-800 w-4/6  mx-auto "></div>
          <div className="h-40 bg-white w-4/6 mx-auto bg-white"></div>
          <div className="w-full flex justify-center">
            <div className="max-w rounded overflow-hidden bg-white shadow-lg w-4/6  ">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  {meal.name}
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
                        <button
                          key={"recipe"}
                          className={classNames(
                          currentMenu === "recipe"
                            ? "sm:hidden bg-gray-900 text-white"
                            : "hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          onClick={() => setCurrentMenu("recipe")}
                        >
                          {"Tarif"}
                        </button>
                        <button
                          key={"foodValue"}
                          className={classNames(
                          currentMenu === "foodValue"
                            ? "sm:hidden bg-gray-900 text-white"
                            : "hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          onClick={() => setCurrentMenu("foodValue")}
                        >
                          {"Besin Değerleri"}
                        </button>
                        <button
                          key={"benefits"}
                          className={classNames(
                          currentMenu === "benefits"
                            ? "sm:hidden bg-gray-900 text-white"
                            : "hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          onClick={() => setCurrentMenu("benefits")}
                        >
                          {"Faydaları"}
                        </button>
                        <button
                          key={"history"}
                          className={classNames(
                          currentMenu === "history"
                            ? "sm:hidden bg-gray-900 text-white"
                            : "hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          onClick={() => setCurrentMenu("history")}
                        >
                          {"Tarihçesi"}
                        </button>
                        <div className=" hidden sm:ml-6 sm:block flex items-center justify-center">
                          <div className="flex justify-between space-x-4">
                            <button
                              key={"recipe"}
                              className={classNames(
                              currentMenu === "recipe"
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              onClick={() => setCurrentMenu("recipe")}
                            >
                              {"Tarifi"}
                            </button>
                            <button
                              key={"foodValue"}
                              className={classNames(
                                currentMenu === "foodValue"
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              onClick={() => setCurrentMenu("foodValue")}
                            >
                              {"Besin Değerleri"}
                              </button>
                            <button
                              key={"benefits"}
                              className={classNames(
                                currentMenu === "benefits"
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              onClick={() => setCurrentMenu("benefits")}
                            >
                              {"Faydaları"}
                            </button>
                            <button
                              key={"history"}
                              className={classNames(
                                currentMenu === "history"
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              onClick={() => setCurrentMenu("history")}
                            >
                              {"Tarihçesi"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Mobile menus*/}
                    <DisclosurePanel className="sm:hidden">
                      <div className="space-y-1 px-2 pb-3 pt-2">
                        <DisclosureButton
                          key={"foodValue"}
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
                {currentMenu === "recipe" && <Recipe recipe={meal.recipe} />}
                {currentMenu === "foodValue" && (
                  <RecipeDetailValue totalNutrient={meal.totalNutrients} />
                )}
                {currentMenu === "benefits" && (
                  <RecipeBenefits benefits={meal.benefits} />
                )}
                {currentMenu === "history" && (
                  <RecipeHistory history={meal.history} />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : loading ? (
        <LoadingCarousel />
      ) : (
        <div>
          Aradığınız yemeği bulamadık. Lütfen girmiş olduğunuz besin id'sini
          kontrol ediniz :/
        </div>
      )}
    </div>
  );
}
