import clsx from "clsx";
import { useEffect } from "react";

// value={Object.values(props.foodTableList)
//   .map((food: any) => food.kCal)
//   .reduce((total, kCal) => total + kCal, 0)
//   .toFixed(2)}
type Props = {
  currentMenu: string;
  totalNutrient: any;
  setValuesForm: any;
};
export default function AddRecipeDetailValue(props: Props) {
  useEffect(() => {
    console.log(props.totalNutrient);
    Object.values(props.totalNutrient)
      .map((food: any) => food.kCal)
      .reduce((total, kCal) => total + kCal, 0);
  }, [props.totalNutrient]);
  return (
    <div
      id="recipe-values"
      className={clsx({ hidden: props.currentMenu !== "foodValue" })}
    >
      <h1 className="font-bold text-xl mb-3">Genel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="font-bold">Kalori:</div>
        <div>
          {Object.values(props.totalNutrient)
            .map((food: any) => food.kCal)
            .reduce((total, kCal) => total + kCal, 0)}
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              kcal
            </span>
        </div>

        <div className="font-bold">Protein:</div>
        <div>
          {Object.values(props.totalNutrient)
            .map((food: any) => food.protein)
            .reduce((total, protein) => total + protein, 0)/1000}
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
        </div>

        <div className="font-bold">Su:</div>
        <div>
          {Object.values(props.totalNutrient)
            .map((food: any) => food.water)
            .reduce((total, water) => total + water, 0)/1000}
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
        </div>

        <div className="font-bold">Azot:</div>
        <div>
          {Object.values(props.totalNutrient)
            .map((food: any) => food.nitrogen)
            .reduce((total, nitrogen) => total + nitrogen, 0)/1000}
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-3 mt-5">Vitamin</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Vitamin A:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminA)
              .reduce((total, vitaminA) => total + vitaminA, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin B1:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminB1)
              .reduce((total, vitaminB1) => total + vitaminB1, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin B2:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminB2)
              .reduce((total, vitaminB2) => total + vitaminB2, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin B3:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminB3)
              .reduce((total, vitaminB3) => total + vitaminB3, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin B5:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminB5)
              .reduce((total, vitaminB5) => total + vitaminB5, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin B6:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminB6)
              .reduce((total, vitaminB6) => total + vitaminB6, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin B7:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminB7)
              .reduce((total, vitaminB7) => total + vitaminB7, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin B9:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminB9)
              .reduce((total, vitaminB9) => total + vitaminB9, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin B12:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminB12)
              .reduce((total, vitaminB12) => total + vitaminB12, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin C:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminC)
              .reduce((total, vitaminC) => total + vitaminC, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin D:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminD)
              .reduce((total, vitaminD) => total + vitaminD, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin E:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminE)
              .reduce((total, vitaminE) => total + vitaminE, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin K:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminK)
              .reduce((total, vitaminK) => total + vitaminK, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Vitamin D3:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminD3)
              .reduce((total, vitaminD3) => total + vitaminD3, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Retinol (Vitamin A1):</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminA1)
              .reduce((total, vitaminA1) => total + vitaminA1, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Beta-Carotene (Vitamin A2):</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.vitamin.vitaminA2)
              .reduce((total, vitaminA2) => total + vitaminA2, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-xl mb-3 mt-5">Mineral</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Kalsiyum:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.calcium)
              .reduce((total, calcium) => total + calcium, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Demir:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.iron)
              .reduce((total, iron) => total + iron, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Magnezyum:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.magnesium)
              .reduce((total, magnesium) => total + magnesium, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Fosfor:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.phosphorus)
              .reduce((total, phosphorus) => total + phosphorus, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Potasyum:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.potassium)
              .reduce((total, potassium) => total + potassium, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Sodyum:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.sodium)
              .reduce((total, sodium) => total + sodium, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Çinko:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.zinc)
              .reduce((total, zinc) => total + zinc, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Bakır:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.copper)
              .reduce((total, copper) => total + copper, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Mangan:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.manganese)
              .reduce((total, manganese) => total + manganese, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
          <div className="font-bold">Selenyum:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.mineral.selenium)
              .reduce((total, selenium) => total + selenium, 0)}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              mg
            </span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-3 mt-5">Yağ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Doymuş Yağ:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.fat.saturated)
              .reduce((total, saturated) => total + saturated, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>

          <div className="font-bold">Doymamış Yağ:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.fat.unsaturated)
              .reduce((total, unsaturated) => total + unsaturated, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>
          <div className="font-bold">Kolestrol:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.fat.cholesterol)
              .reduce((total, cholesterol) => total + cholesterol, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>
          <div className="font-bold">Trans Yağ:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.fat.trans)
              .reduce((total, trans) => total + trans, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-3 mt-5">Karbonhidrat</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Lif:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.carbohydrate.fiber)
              .reduce((total, fiber) => total + fiber, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>

          <div className="font-bold">Nişasta:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.carbohydrate.starch)
              .reduce((total, starch) => total + starch, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>

          <div className="font-bold">Sükroz:</div>
          <div>
            {" "}
            {Object.values(props.totalNutrient)
              .map((food: any) => food.carbohydrate.sugar.sucrose)
              .reduce((total, sucrose) => total + sucrose, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>

          <div className="font-bold">Glukoz:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.carbohydrate.sugar.glucose)
              .reduce((total, glucose) => total + glucose, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>

          <div className="font-bold">Fruktoz:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.carbohydrate.sugar.fructose)
              .reduce((total, fructose) => total + fructose, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>

          <div className="font-bold">Laktoz:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.carbohydrate.sugar.lactose)
              .reduce((total, lactose) => total + lactose, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>

          <div className="font-bold">Maltoz:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.carbohydrate.sugar.maltose)
              .reduce((total, maltose) => total + maltose, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>

          <div className="font-bold">Galaktoz:</div>
          <div>
            {Object.values(props.totalNutrient)
              .map((food: any) => food.carbohydrate.sugar.galactose)
              .reduce((total, galactose) => total + galactose, 0)/1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          1 Porsiyon
        </span>
      </div>
    </div>
  );
}
