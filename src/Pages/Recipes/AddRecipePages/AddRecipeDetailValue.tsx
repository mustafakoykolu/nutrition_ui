import clsx from "clsx";
import { useEffect } from "react";

type Props = {
  currentMenu: string;
  foodTableList: any;
  setValuesForm: any;
};
export default function AddRecipeDetailValue(props: Props) {
  
  return (
    <div
      id="food-values"
      className={clsx({ hidden: props.currentMenu !== "foodValue" })}
    >
      <h1 className="font-bold text-xl mb-3">Ananasın Besin Değerleri</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Kalori:</div>
            <div className="flex">
            <input
              id="kcal"
              name="kcal"
              type="text"
              value={Object.values(props.foodTableList)
              .map((food: any) => food.kCal)
              .reduce((total, kCal) => total + kCal, 0)
              .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>kcal</span>
            </div>
          <div className="font-bold">Karbonhidrat:</div>
          <div className="flex">
            <input
              id="carbs"
              name="carbs"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.carbs)
                .reduce((total, carbs) => total + carbs, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Protein:</div>
          <div className="flex">
            <input
              id="protein"
              name="protein"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.protein)
                .reduce((total, protein) => total + protein, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Yağ:</div>
          <div className="flex">
            <input
              id="fat"
              name="fat"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.fat)
                .reduce((total, fat) => total + fat, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Lif:</div>
          <div className="flex">
            <input
              id="fiber"
              name="fiber"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.fiber)
                .reduce((total, fiber) => total + fiber, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Şeker:</div>
          <div className="flex">
            <input
              id="sugar"
              name="sugar"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.sugar)
                .reduce((total, sugar) => total + sugar, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Tuz:</div>
          <div className="flex">
            <input
              id="salt"
              name="salt"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.salt)
                .reduce((total, salt) => total + salt, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Demir:</div>
          <div className="flex">
            <input
              id="iron"
              name="iron"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.iron)
                .reduce((total, iron) => total + iron, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin A:</div>
          <div className="flex">
            <input
              id="vitamin-a"
              name="vitamin-a"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminA)
                .reduce((total, vitaminA) => total + vitaminA, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>IU</span>
          </div>
          <div className="font-bold">Vitamin C:</div>
          <div className="flex">
            <input
              id="vitamin-c"
              name="vitamin-c"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminC)
                .reduce((total, vitaminC) => total + vitaminC, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin D:</div>
          <div className="flex">
            <input
              id="vitamin-d"
              name="vitamin-d"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminD)
                .reduce((total, vitaminD) => total + vitaminD, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin E:</div>
          <div className="flex">
            <input
              id="vitamin-e"
              name="vitamin-e"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminE)
                .reduce((total, vitaminE) => total + vitaminE, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin K:</div>
          <div className="flex">
            <input
              id="vitamin-k"
              name="vitamin-k"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminK)
                .reduce((total, vitaminK) => total + vitaminK, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin B1:</div>
          <div className="flex">
            <input
              id="vitamin-b1"
              name="vitamin-b1"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminB1)
                .reduce((total, vitaminB1) => total + vitaminB1, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B2:</div>
          <div className="flex">
            <input
              id="vitamin-b2"
              name="vitamin-b2"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminB2)
                .reduce((total, vitaminB2) => total + vitaminB2, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B3:</div>
          <div className="flex">
            <input
              id="vitamin-b3"
              name="vitamin-b3"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminB3)
                .reduce((total, vitaminB3) => total + vitaminB3, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B5:</div>
          <div className="flex">
            <input
              id="vitamin-b5"
              name="vitamin-b5"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminB5)
                .reduce((total, vitaminB5) => total + vitaminB5, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B6:</div>
          <div className="flex">
            <input
              id="vitamin-b6"
              name="vitamin-b6"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminB6)
                .reduce((total, vitaminB6) => total + vitaminB6, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B7:</div>
          <div className="flex">
            <input
              id="vitamin-b7"
              name="vitamin-b7"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminB7)
                .reduce((total, vitaminB7) => total + vitaminB7, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin B9:</div>
          <div className="flex">
            <input
              id="vitamin-b9"
              name="vitamin-b9"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminB9)
                .reduce((total, vitaminB9) => total + vitaminB9, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin B12:</div>
          <div className="flex">
            <input
              id="vitamin-b12"
              name="vitamin-b12"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.vitaminB12)
                .reduce((total, vitaminB12) => total + vitaminB12, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Kalsiyum:</div>
          <div className="flex">
            <input
              id="calcium"
              name="calcium"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.calcium)
                .reduce((total, calcium) => total + calcium, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Fosfor:</div>
          <div className="flex">
            <input
              id="phosphorus"
              name="phosphorus"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.phosphorus)
                .reduce((total, phosphorus) => total + phosphorus, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Magnezyum:</div>
          <div className="flex">
            <input
              id="magnesium"
              name="magnesium"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.magnesium)
                .reduce((total, magnesium) => total + magnesium, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Çinko:</div>
          <div className="flex">
            <input
              id="zinc"
              name="zinc"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.zinc)
                .reduce((total, zinc) => total + zinc, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Bakır:</div>
          <div className="flex">
            <input
              id="copper"
              name="copper"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.copper)
                .reduce((total, copper) => total + copper, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Mangan:</div>
          <div className="flex">
            <input
              id="manganese"
              name="manganese"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.manganese)
                .reduce((total, manganese) => total + manganese, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Selenyum:</div>
          <div className="flex">
            <input
              id="selenium"
              name="selenium"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.selenium)
                .reduce((total, selenium) => total + selenium, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Potasyum:</div>
          <div className="flex">
            <input
              id="potassium"
              name="potassium"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.potassium)
                .reduce((total, potassium) => total + potassium, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Sodyum:</div>
          <div className="flex">
            <input
              id="sodium"
              name="sodium"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.sodium)
                .reduce((total, sodium) => total + sodium, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Kolesterol:</div>
          <div className="flex">
            <input
              id="cholesterol"
              name="cholesterol"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.cholesterol)
                .reduce((total, cholesterol) => total + cholesterol, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Kafein:</div>
          <div className="flex">
            <input
              id="caffeine"
              name="caffeine"
              type="text"
              value={Object.values(props.foodTableList)
                .map((food: any) => food.caffeine)
                .reduce((total, caffeine) => total + caffeine, 0)
                .toFixed(2)}
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
        </div>
      </form>
    </div>
  );
}
