import { FoodType } from "../../../Models/Food/FoodType";

type Props = {
  food: FoodType;
};
export default function FoodDetailValue(props: Props) {
  return (
    <div id="food-values">
      <h1 className="font-bold text-xl mb-3">Genel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.food.kCal != null && (
          <>
            <div className="font-bold">Kalori:</div>
            <div>
              {props.food.kCal}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                kcal
              </span>
            </div>
          </>
        )}
        {props.food.protein != null && (
          <>
            <div className="font-bold">Protein:</div>
            <div>
              {props.food.protein / 1000}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                g
              </span>
            </div>
          </>
        )}

        {props.food.water != null && (
          <>
            <div className="font-bold">Su:</div>
            <div>
              {props.food.water / 1000}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                g
              </span>
            </div>
          </>
        )}
        {props.food.nitrogen != null && (
          <>
            <div className="font-bold">Azot:</div>
            <div>
              {props.food.nitrogen / 1000}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                g
              </span>
            </div>
          </>
        )}
      </div>
      <h1 className="font-bold text-xl mb-3 mt-5">Vitamin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.food.vitamin.vitaminA != null && (
          <>
            <div className="font-bold">Vitamin A:</div>
            <div>
              {props.food.vitamin.vitaminA}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminB1 != null && (
          <>
            <div className="font-bold">Vitamin B1:</div>
            <div>
              {props.food.vitamin.vitaminB1}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminB2 != null && (
          <>
            <div className="font-bold">Vitamin B2:</div>
            <div>
              {props.food.vitamin.vitaminB2}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminB3 != null && (
          <>
            <div className="font-bold">Vitamin B3:</div>
            <div>
              {props.food.vitamin.vitaminB3}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminB5 != null && (
          <>
            <div className="font-bold">Vitamin B5:</div>
            <div>
              {props.food.vitamin.vitaminB5}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminB6 != null && (
          <>
            <div className="font-bold">Vitamin B6:</div>
            <div>
              {props.food.vitamin.vitaminB6}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminB7 != null && (
          <>
            <div className="font-bold">Vitamin B7:</div>
            <div>
              {props.food.vitamin.vitaminB7}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminB9 != null && (
          <>
            <div className="font-bold">Vitamin B9:</div>
            <div>
              {props.food.vitamin.vitaminB9}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminB12 != null && (
          <>
            <div className="font-bold">Vitamin B12:</div>
            <div>
              {props.food.vitamin.vitaminB12}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminC != null && (
          <>
            <div className="font-bold">Vitamin C:</div>
            <div>
              {props.food.vitamin.vitaminC}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminD != null && (
          <>
            <div className="font-bold">Vitamin D:</div>
            <div>
              {props.food.vitamin.vitaminD}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminE != null && (
          <>
            <div className="font-bold">Vitamin E:</div>
            <div>
              {props.food.vitamin.vitaminE}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminK != null && (
          <>
            <div className="font-bold">Vitamin K:</div>
            <div>
              {props.food.vitamin.vitaminK}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminD3 != null && (
          <>
            <div className="font-bold">Vitamin D3:</div>
            <div>
              {props.food.vitamin.vitaminD3}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminA1 != null && (
          <>
            <div className="font-bold">Retinol (Vitamin A1):</div>
            <div>
              {props.food.vitamin.vitaminA1}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.vitamin.vitaminA2 != null && (
          <>
            <div className="font-bold">Beta-Carotene (Vitamin A2):</div>
            <div>
              {props.food.vitamin.vitaminA2}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
      </div>
      <h1 className="font-bold text-xl mb-3 mt-5">Mineral</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.food.mineral.calcium != null && (
          <>
            <div className="font-bold">Kalsiyum:</div>
            <div>
              {props.food.mineral.calcium}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.mineral.iron != null && (
          <>
            <div className="font-bold">Demir:</div>
            <div>
              {props.food.mineral.iron}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.mineral.magnesium != null && (
          <>
            <div className="font-bold">Magnezyum:</div>
            <div>
              {props.food.mineral.magnesium}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.mineral.phosphorus != null && (
          <>
            <div className="font-bold">Fosfor:</div>
            <div>
              {props.food.mineral.phosphorus}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.mineral.potassium != null && (
          <>
            <div className="font-bold">Potasyum:</div>
            <div>
              {props.food.mineral.potassium}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.mineral.sodium != null && (
          <>
            <div className="font-bold">Sodyum:</div>
            <div>
              {props.food.mineral.sodium}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.mineral.zinc != null && (
          <>
            <div className="font-bold">Çinko:</div>
            <div>
              {props.food.mineral.zinc}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.mineral.copper != null && (
          <>
            <div className="font-bold">Bakır:</div>
            <div>
              {props.food.mineral.copper}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.mineral.manganese != null && (
          <>
            <div className="font-bold">Mangan:</div>
            <div>
              {props.food.mineral.manganese}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
        {props.food.mineral.selenium != null && (
          <>
            <div className="font-bold">Selenyum:</div>
            <div>
              {props.food.mineral.selenium}{" "}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
                mg
              </span>
            </div>
          </>
        )}
      </div>
      <h1 className="font-bold text-xl mb-3 mt-5">Yağ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.food.fat.saturated != null && (
          <>
            <div className="font-bold">Doymuş Yağ:</div>
            <div>{props.food.fat.saturated/1000} <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
            
          </>
        )}
        {props.food.fat.unsaturated != null && (
          <>
            <div className="font-bold">Doymamış Yağ:</div>
            <div>{props.food.fat.unsaturated /1000} <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
        {props.food.fat.cholesterol != null && (
          <>
            <div className="font-bold">Kolesterol:</div>
            <div>{props.food.fat.cholesterol/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
        {props.food.fat.trans != null && (
          <>
            <div className="font-bold">Trans Yağ:</div>
            <div>{props.food.fat.trans/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
      </div>

      <h1 className="font-bold text-xl mb-3 mt-5">Karbonhidrat</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.food.carbohydrate.fiber != null && (
          <>
            <div className="font-bold">Lif:</div>
            <div>{props.food.carbohydrate.fiber/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
        {props.food.carbohydrate.starch != null && (
          <>
            <div className="font-bold">Nişasta:</div>
            <div>{props.food.carbohydrate.starch/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
        {props.food.carbohydrate.sugar.sucrose != null && (
          <>
            <div className="font-bold">Sükroz:</div>
            <div>{props.food.carbohydrate.sugar.sucrose/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
        {props.food.carbohydrate.sugar.glucose != null && (
          <>
            <div className="font-bold">Glukoz:</div>
            <div>{props.food.carbohydrate.sugar.glucose/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
        {props.food.carbohydrate.sugar.fructose != null && (
          <>
            <div className="font-bold">Fruktoz:</div>
            <div>{props.food.carbohydrate.sugar.fructose/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
        {props.food.carbohydrate.sugar.lactose != null && (
          <>
            <div className="font-bold">Laktoz:</div>
            <div>{props.food.carbohydrate.sugar.lactose/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
        {props.food.carbohydrate.sugar.maltose != null && (
          <>
            <div className="font-bold">Maltoz:</div>
            <div>{props.food.carbohydrate.sugar.maltose/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
        {props.food.carbohydrate.sugar.galactose != null && (
          <>
            <div className="font-bold">Galaktoz:</div>
            <div>{props.food.carbohydrate.sugar.galactose/1000}<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black ml-2 mb-2">
              g
            </span></div>
          </>
        )}
      </div>
      <div className="mt-5 flex justify-end">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          1 Porsiyon = {props.food.portion + " " + props.food.portionUnit}
        </span>
      </div>
    </div>
  );
}
