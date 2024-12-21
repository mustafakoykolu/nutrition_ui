import basket from "../../../assets/Images/basket.png";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddFoodDetailValue from "./AddRecipeDetailValue";
import AddFoodBenefits from "./AddRecipeBenefits";
import AddFoodHistory from "./AddRecipeHistory";
import CancelDialog from "../../../Dialogs/AddFoodDialogs/CancelDialog";
import ApprovalDialog from "../../../Dialogs/AddFoodDialogs/ApprovalDialog";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AddRecipeDescription from "./AddRecipeDescription";
import AddRecipeFoods from "./AddRecipeFoods";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { useAuth } from "../../../Helpers/AuthHelper";
import axios from "axios";
import SuccessDialog from "../../../Dialogs/SuccessDialog";
import ErrorDialog from "../../../Dialogs/ErrorDialog";
import { LoadingCarousel } from "../../../Layouts/LoadingCarousel";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AddNewRecipe() {
  const [recipeName, setRecipeName] = useState<string>("");
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showApprovalDialog, setShowApprovalDialog] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("foodValue");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState<string>(basket);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errOpen, setErrOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [foodTableList, setFoodTableList] = useState<any>({});


  const [benefitsEditorState, setBenefitsEditorState] = useState(
    EditorState.createEmpty()
  );
  const [historyEditorState, setHistoryEditorState] = useState(
    EditorState.createEmpty()
  );
  const [recipeEditorState, setRecipeEditorState] = useState(
    EditorState.createEmpty()
  );
  const [valuesForm, setValuesForm] = useState<Record<string, string>>({});
  const auth = useAuth();
  async function handleSubmit() {
    setLoading(true);
    const benefitsHtml = stateToHTML(benefitsEditorState.getCurrentContent());
    const historyHtml = stateToHTML(historyEditorState.getCurrentContent());
    const recipeHtml = stateToHTML(recipeEditorState.getCurrentContent());
    const data: FormData = new FormData();
    const foods : any = [];
    Object.entries(foodTableList).map(([key, value]: [string, any]) => {
      foods.push({portion: value.portion, portionUnit: value.portionUnit, foodId: value.id});
    });
    console.log(foods);
    data.append("meadlIngredients", foods);
    data.append("history", historyHtml);
    data.append("benefits", benefitsHtml);
    data.append("recipe", recipeHtml);
    data.append("name", recipeName);
    if (file) {
      data.append("image", file);
    }
    var response = await axios({
      method: "post",
      url: process.env.REACT_APP_API_URL + "/recipe/CreateRecipe",
      data: data,
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    });
    if (response.status === 200) {
      console.log(response);
      setSuccessOpen(true);
    } else {
      console.log(response);
      setErrOpen(true);
    }
    setLoading(false);
  }
  function handleChange(e: any) {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  }


  return (
    <div id="add-recipe-page-container">
      {loading && <LoadingCarousel />}
      <CancelDialog open={showCancelDialog} setOpen={setShowCancelDialog} />
      <ApprovalDialog
        open={showApprovalDialog}
        submitFunction={handleSubmit}
        setOpen={setShowApprovalDialog}
      />
      <SuccessDialog
        header={"Başarıyla yayınlandı!"}
        message={"Yeni yemeğiniz kaydedildi ve yayınlandı!"}
        buttonMessage="Tamam"
        navigateTo={"/besin-kalorileri"}
        open={successOpen}
        setOpen={setSuccessOpen}
      />
      <ErrorDialog
        header={"Yemeğiniz kaydedilemedi!"}
        message={"Yeni yemeğiniz ne yazıkki kaydedilemedi."}
        buttonMessage="Tamam"
        open={errOpen}
        setOpen={setErrOpen}
      />
      <div className="my-20 w-4/6">
        <label htmlFor="img-input">
          <img
            className="absolute inset-x-0 shadow-xl bg-white h-80 mx-auto  rounded-full "
            src={preview}
          />
          <input
            type="file"
            id="img-input"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="h-40 bg-gray-800 w-4/6  mx-auto "></div>
      <div className="h-40 bg-white w-4/6 mx-auto bg-white"></div>
      <div className="w-full flex justify-center">
        <div className="max-w rounded overflow-hidden bg-white shadow-lg w-4/6 mb-20  ">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              <input
                className="text-center"
                type="text"
                placeholder="Yemek Adı"
                onChange={(event: any) => setRecipeName(event.target.value)}
              />
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
                      key={"recipeFoods"}
                      className={classNames(
                        currentMenu === "recipeFoods"
                          ? "sm:hidden bg-gray-900 text-white"
                          : "hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      to={"#"}
                      onClick={() => setCurrentMenu("recipeFoods")}
                    >
                      {"Malzemeler"}
                    </Link>
                    <Link
                      key={"recipeDescription"}
                      className={classNames(
                        currentMenu === "recipeDescription"
                          ? "sm:hidden bg-gray-900 text-white"
                          : "hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      to={"#"}
                      onClick={() => setCurrentMenu("recipeDescription")}
                    >
                      {"Tarif"}
                    </Link>
                    <Link
                      key={"foodValue"}
                      className={classNames(
                        currentMenu === "foodValue"
                          ? "sm:hidden bg-gray-900 text-white"
                          : "hidden text-gray-300 hover:bg-gray-700 hover:text-white",
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
                          ? " sm:hidden  bg-gray-900 text-white"
                          : " hidden text-gray-300 hover:bg-gray-700 hover:text-white",
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
                          ? " sm:hidden  bg-gray-900 text-white"
                          : " hidden text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      to={"#"}
                      onClick={() => setCurrentMenu("history")}
                    >
                      {"Tarihçesi"}
                    </Link>
                    <div className=" hidden sm:ml-6 sm:block flex items-center justify-center">
                      <div className="flex justify-between space-x-4">
                        <Link
                          key={"recipeDescription"}
                          className={classNames(
                            currentMenu === "recipeFoods"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          to={"#"}
                          onClick={() => setCurrentMenu("recipeFoods")}
                        >
                          {"Malzemeler"}
                        </Link>
                        <Link
                          key={"recipeDescription"}
                          className={classNames(
                            currentMenu === "recipeDescription"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          to={"#"}
                          onClick={() => setCurrentMenu("recipeDescription")}
                        >
                          {"Tarif"}
                        </Link>
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
            <AddRecipeFoods
              currentMenu={currentMenu}
              foodTableList={foodTableList}
              setFoodTableList={setFoodTableList}
            />
            <AddRecipeDescription currentMenu={currentMenu}    editorState={recipeEditorState}
              setEditorState={setRecipeEditorState} />
            <AddFoodDetailValue
              currentMenu={currentMenu}
              foodTableList={foodTableList}
              setValuesForm={setValuesForm} 
            />
            <AddFoodBenefits
              currentMenu={currentMenu}
              editorState={benefitsEditorState}
              setEditorState={setBenefitsEditorState}
            />
            <AddFoodHistory
              currentMenu={currentMenu}
              editorState={historyEditorState}
              setEditorState={setHistoryEditorState}
            />
            <div id="buttons" className="flex mt-20">
              <button
                className="ml-auto rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onClick={() => {
                  setShowCancelDialog(true);
                }}
              >
                İptal
              </button>
              <button
                className="ml-5 rounded-md bg-blue-500 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onClick={() => {
                  setShowApprovalDialog(true);
                }}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
