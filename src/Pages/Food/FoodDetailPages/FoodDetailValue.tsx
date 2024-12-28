import { FoodType } from "../../../Models/FoodType";

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
            <div>{props.food.kCal}</div>
          </>
        )}
        {props.food.protein != null && (
          <>
            <div className="font-bold">Protein:</div>
            <div>{props.food.protein}</div>
          </>
        )}

        {props.food.water != null && (
          <>
            <div className="font-bold">Su:</div>
            <div>{props.food.water}</div>
          </>
        )}
        {props.food.nitrogen != null && (
          <>
            <div className="font-bold">Azot:</div>
            <div>{props.food.nitrogen}</div>
          </>
        )}
      </div>
      <h1 className="font-bold text-xl mb-3 mt-5">Vitamin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.food.vitamin.vitaminA != null && (
          <>
            <div className="font-bold">Vitamin A:</div>
            <div>{props.food.vitamin.vitaminA}</div>
          </>
        )}
        {props.food.vitamin.vitaminB1 != null && (
          <>
            <div className="font-bold">Vitamin B1:</div>
            <div>{props.food.vitamin.vitaminB1}</div>
          </>
        )}
        {props.food.vitamin.vitaminB2 != null && (
          <>
            <div className="font-bold">Vitamin B2:</div>
            <div>{props.food.vitamin.vitaminB2}</div>
          </>
        )}
        {props.food.vitamin.vitaminB3 != null && (
          <>
            <div className="font-bold">Vitamin B3:</div>
            <div>{props.food.vitamin.vitaminB3}</div>
          </>
        )}
        {props.food.vitamin.vitaminB5 != null && (
          <>
            <div className="font-bold">Vitamin B5:</div>
            <div>{props.food.vitamin.vitaminB5}</div>
          </>
        )}
        {props.food.vitamin.vitaminB6 != null && (
          <>
            <div className="font-bold">Vitamin B6:</div>
            <div>{props.food.vitamin.vitaminB6}</div>
          </>
        )}
        {props.food.vitamin.vitaminB7 != null && (
          <>
            <div className="font-bold">Vitamin B7:</div>
            <div>{props.food.vitamin.vitaminB7}</div>
          </>
        )}
        {props.food.vitamin.vitaminB9 != null && (
          <>
            <div className="font-bold">Vitamin B9:</div>
            <div>{props.food.vitamin.vitaminB9}</div>
          </>
        )}
        {props.food.vitamin.vitaminB12 != null && (
          <>
            <div className="font-bold">Vitamin B12:</div>
            <div>{props.food.vitamin.vitaminB12}</div>
          </>
        )}
        {props.food.vitamin.vitaminC != null && (
          <>
            <div className="font-bold">Vitamin C:</div>
            <div>{props.food.vitamin.vitaminC}</div>
          </>
        )}
        {props.food.vitamin.vitaminD != null && (
          <>
            <div className="font-bold">Vitamin D:</div>
            <div>{props.food.vitamin.vitaminD}</div>
          </>
        )}
        {props.food.vitamin.vitaminE != null && (
          <>
            <div className="font-bold">Vitamin E:</div>
            <div>{props.food.vitamin.vitaminE}</div>
          </>
        )}
        {props.food.vitamin.vitaminK != null && (
          <>
            <div className="font-bold">Vitamin K:</div>
            <div>{props.food.vitamin.vitaminK}</div>
          </>
        )}
        {props.food.vitamin.vitaminD3 != null && (
          <>
            <div className="font-bold">Vitamin D3:</div>
            <div>{props.food.vitamin.vitaminD3}</div>
          </>
        )}
        {props.food.vitamin.vitaminA1 != null && (
          <>
            <div className="font-bold">Retinol (Vitamin A1):</div>
            <div>{props.food.vitamin.vitaminA1}</div>
          </>
        )}
        {props.food.vitamin.vitaminA2 != null && (
          <>
            <div className="font-bold">Beta-Carotene (Vitamin A2):</div>
            <div>{props.food.vitamin.vitaminA2}</div>
          </>
        )}
      </div>
      <h1 className="font-bold text-xl mb-3 mt-5">Mineral</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.food.mineral.calcium != null && (
          <>
            <div className="font-bold">Kalsiyum:</div>
            <div>{props.food.mineral.calcium}</div>
          </>
        )}
        {props.food.mineral.iron != null && (
          <>
            <div className="font-bold">Demir:</div>
            <div>{props.food.mineral.iron}</div>
          </>
        )}
        {props.food.mineral.magnesium != null && (
          <>
            <div className="font-bold">Magnezyum:</div>
            <div>{props.food.mineral.magnesium}</div>
          </>
        )}
        {props.food.mineral.phosphorus != null && (
          <>
            <div className="font-bold">Fosfor:</div>
            <div>{props.food.mineral.phosphorus}</div>
          </>
        )}
        {props.food.mineral.potassium != null && (
          <>
            <div className="font-bold">Potasyum:</div>
            <div>{props.food.mineral.potassium}</div>
          </>
        )}
        {props.food.mineral.sodium != null && (
          <>
            <div className="font-bold">Sodyum:</div>
            <div>{props.food.mineral.sodium}</div>
          </>
        )}
        {props.food.mineral.zinc != null && (
          <>
            <div className="font-bold">Çinko:</div>
            <div>{props.food.mineral.zinc}</div>
          </>
        )}
        {props.food.mineral.copper != null && (
          <>
            <div className="font-bold">Bakır:</div>
            <div>{props.food.mineral.copper}</div>
          </>
        )}
        {props.food.mineral.manganese != null && (
          <>
            <div className="font-bold">Mangan:</div>
            <div>{props.food.mineral.manganese}</div>
          </>
        )}
        {props.food.mineral.selenium != null && (
          <>
            <div className="font-bold">Selenyum:</div>
            <div>{props.food.mineral.selenium}</div>
          </>
        )}
      </div>
      <h1 className="font-bold text-xl mb-3 mt-5">Yağ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.food.fat.saturated != null && (
          <>
            <div className="font-bold">Doymuş Yağ:</div>
            <div>{props.food.fat.saturated}</div>
          </>
        )}
        {props.food.fat.unsaturated != null && (
          <>
            <div className="font-bold">Doymamış Yağ:</div>
            <div>{props.food.fat.unsaturated}</div>
          </>
        )}
        {props.food.fat.cholesterol != null && (
          <>
            <div className="font-bold">Kolesterol:</div>
            <div>{props.food.fat.cholesterol}</div>
          </>
        )}
        {props.food.fat.trans != null && (
          <>
            <div className="font-bold">Trans Yağ:</div>
            <div>{props.food.fat.trans}</div>
          </>
        )}
      </div>

      <h1 className="font-bold text-xl mb-3 mt-5">Karbonhidrat</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.food.carbohydrate.fiber != null && (
          <>
            <div className="font-bold">Lif:</div>
            <div>{props.food.carbohydrate.fiber}</div>
          </>
        )}
        {props.food.carbohydrate.starch != null && (
          <>
            <div className="font-bold">Nişasta:</div>
            <div>{props.food.carbohydrate.starch}</div>
          </>
        )}
        {props.food.carbohydrate.sugar.sucrose != null && (
          <>
            <div className="font-bold">Sükroz:</div>
            <div>{props.food.carbohydrate.sugar.sucrose}</div>
          </>
        )}
        {props.food.carbohydrate.sugar.glucose != null && (
          <>
            <div className="font-bold">Glukoz:</div>
            <div>{props.food.carbohydrate.sugar.glucose}</div>
          </>
        )}
        {props.food.carbohydrate.sugar.fructose != null && (
          <>
            <div className="font-bold">Fruktoz:</div>
            <div>{props.food.carbohydrate.sugar.fructose}</div>
          </>
        )}
        {props.food.carbohydrate.sugar.lactose != null && (
          <>
            <div className="font-bold">Laktoz:</div>
            <div>{props.food.carbohydrate.sugar.lactose}</div>
          </>
        )}
        {props.food.carbohydrate.sugar.maltose != null && (
          <>
            <div className="font-bold">Maltoz:</div>
            <div>{props.food.carbohydrate.sugar.maltose}</div>
          </>
        )}
        {props.food.carbohydrate.sugar.galactose != null && (
          <>
            <div className="font-bold">Galaktoz:</div>
            <div>{props.food.carbohydrate.sugar.galactose}</div>
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
