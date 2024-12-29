import { NutrientType } from "../../../Models/Meal/NutrientType";

type Props = {
  totalNutrient: NutrientType;
};
export default function RecipeDetailValue(props: Props) {
  return (
    <div id="recipe-values">
      <h1 className="font-bold text-xl mb-3">Genel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.totalNutrient.kCal != null && (
          <>
            <div className="font-bold">Kalori:</div>
            <div>{props.totalNutrient.kCal}</div>
          </>
        )}
        {props.totalNutrient.protein != null && (
          <>
            <div className="font-bold">Protein:</div>
            <div>{props.totalNutrient.protein}</div>
          </>
        )}

        {props.totalNutrient.water != null && (
          <>
            <div className="font-bold">Su:</div>
            <div>{props.totalNutrient.water}</div>
          </>
        )}
        {props.totalNutrient.nitrogen != null && (
          <>
            <div className="font-bold">Azot:</div>
            <div>{props.totalNutrient.nitrogen}</div>
          </>
        )}
      </div>
      {props.totalNutrient.vitamin != null && (
        <div>
          <h1 className="font-bold text-xl mb-3 mt-5">Vitamin</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {props.totalNutrient.vitamin.vitaminA != null && (
              <>
                <div className="font-bold">Vitamin A:</div>
                <div>{props.totalNutrient.vitamin.vitaminA}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminB1 != null && (
              <>
                <div className="font-bold">Vitamin B1:</div>
                <div>{props.totalNutrient.vitamin.vitaminB1}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminB2 != null && (
              <>
                <div className="font-bold">Vitamin B2:</div>
                <div>{props.totalNutrient.vitamin.vitaminB2}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminB3 != null && (
              <>
                <div className="font-bold">Vitamin B3:</div>
                <div>{props.totalNutrient.vitamin.vitaminB3}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminB5 != null && (
              <>
                <div className="font-bold">Vitamin B5:</div>
                <div>{props.totalNutrient.vitamin.vitaminB5}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminB6 != null && (
              <>
                <div className="font-bold">Vitamin B6:</div>
                <div>{props.totalNutrient.vitamin.vitaminB6}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminB7 != null && (
              <>
                <div className="font-bold">Vitamin B7:</div>
                <div>{props.totalNutrient.vitamin.vitaminB7}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminB9 != null && (
              <>
                <div className="font-bold">Vitamin B9:</div>
                <div>{props.totalNutrient.vitamin.vitaminB9}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminB12 != null && (
              <>
                <div className="font-bold">Vitamin B12:</div>
                <div>{props.totalNutrient.vitamin.vitaminB12}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminC != null && (
              <>
                <div className="font-bold">Vitamin C:</div>
                <div>{props.totalNutrient.vitamin.vitaminC}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminD != null && (
              <>
                <div className="font-bold">Vitamin D:</div>
                <div>{props.totalNutrient.vitamin.vitaminD}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminE != null && (
              <>
                <div className="font-bold">Vitamin E:</div>
                <div>{props.totalNutrient.vitamin.vitaminE}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminK != null && (
              <>
                <div className="font-bold">Vitamin K:</div>
                <div>{props.totalNutrient.vitamin.vitaminK}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminD3 != null && (
              <>
                <div className="font-bold">Vitamin D3:</div>
                <div>{props.totalNutrient.vitamin.vitaminD3}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminA1 != null && (
              <>
                <div className="font-bold">Retinol (Vitamin A1):</div>
                <div>{props.totalNutrient.vitamin.vitaminA1}</div>
              </>
            )}
            {props.totalNutrient.vitamin.vitaminA2 != null && (
              <>
                <div className="font-bold">Beta-Carotene (Vitamin A2):</div>
                <div>{props.totalNutrient.vitamin.vitaminA2}</div>
              </>
            )}
          </div>
        </div>
      )}

      {props.totalNutrient.mineral != null && (
        <div>
          <h1 className="font-bold text-xl mb-3 mt-5">Mineral</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {props.totalNutrient.mineral.calcium != null && (
              <>
                <div className="font-bold">Kalsiyum:</div>
                <div>{props.totalNutrient.mineral.calcium}</div>
              </>
            )}
            {props.totalNutrient.mineral.iron != null && (
              <>
                <div className="font-bold">Demir:</div>
                <div>{props.totalNutrient.mineral.iron}</div>
              </>
            )}
            {props.totalNutrient.mineral.magnesium != null && (
              <>
                <div className="font-bold">Magnezyum:</div>
                <div>{props.totalNutrient.mineral.magnesium}</div>
              </>
            )}
            {props.totalNutrient.mineral.phosphorus != null && (
              <>
                <div className="font-bold">Fosfor:</div>
                <div>{props.totalNutrient.mineral.phosphorus}</div>
              </>
            )}
            {props.totalNutrient.mineral.potassium != null && (
              <>
                <div className="font-bold">Potasyum:</div>
                <div>{props.totalNutrient.mineral.potassium}</div>
              </>
            )}
            {props.totalNutrient.mineral.sodium != null && (
              <>
                <div className="font-bold">Sodyum:</div>
                <div>{props.totalNutrient.mineral.sodium}</div>
              </>
            )}
            {props.totalNutrient.mineral.zinc != null && (
              <>
                <div className="font-bold">Çinko:</div>
                <div>{props.totalNutrient.mineral.zinc}</div>
              </>
            )}
            {props.totalNutrient.mineral.copper != null && (
              <>
                <div className="font-bold">Bakır:</div>
                <div>{props.totalNutrient.mineral.copper}</div>
              </>
            )}
            {props.totalNutrient.mineral.manganese != null && (
              <>
                <div className="font-bold">Mangan:</div>
                <div>{props.totalNutrient.mineral.manganese}</div>
              </>
            )}
            {props.totalNutrient.mineral.selenium != null && (
              <>
                <div className="font-bold">Selenyum:</div>
                <div>{props.totalNutrient.mineral.selenium}</div>
              </>
            )}
          </div>
        </div>
      )}
      {props.totalNutrient.fat != null && (
        <div>
          <h1 className="font-bold text-xl mb-3 mt-5">Yağ</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {props.totalNutrient.fat.saturated != null && (
              <>
                <div className="font-bold">Doymuş Yağ:</div>
                <div>{props.totalNutrient.fat.saturated}</div>
              </>
            )}
            {props.totalNutrient.fat.unsaturated != null && (
              <>
                <div className="font-bold">Doymamış Yağ:</div>
                <div>{props.totalNutrient.fat.unsaturated}</div>
              </>
            )}
            {props.totalNutrient.fat.cholesterol != null && (
              <>
                <div className="font-bold">Kolesterol:</div>
                <div>{props.totalNutrient.fat.cholesterol}</div>
              </>
            )}
            {props.totalNutrient.fat.trans != null && (
              <>
                <div className="font-bold">Trans Yağ:</div>
                <div>{props.totalNutrient.fat.trans}</div>
              </>
            )}
          </div>
        </div>
      )}
      {props.totalNutrient.carbohydrate != null && (
        <div>
          <h1 className="font-bold text-xl mb-3 mt-5">Karbonhidrat</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {props.totalNutrient.carbohydrate.fiber != null && (
              <>
                <div className="font-bold">Lif:</div>
                <div>{props.totalNutrient.carbohydrate.fiber}</div>
              </>
            )}
            {props.totalNutrient.carbohydrate.starch != null && (
              <>
                <div className="font-bold">Nişasta:</div>
                <div>{props.totalNutrient.carbohydrate.starch}</div>
              </>
            )}
            {props.totalNutrient.carbohydrate.sugar != null && (
              <>
                {props.totalNutrient.carbohydrate.sugar.sucrose != null && (
                  <>
                    <div className="font-bold">Sükroz:</div>
                    <div>{props.totalNutrient.carbohydrate.sugar.sucrose}</div>
                  </>
                )}
                {props.totalNutrient.carbohydrate.sugar.glucose != null && (
                  <>
                    <div className="font-bold">Glukoz:</div>
                    <div>{props.totalNutrient.carbohydrate.sugar.glucose}</div>
                  </>
                )}
                {props.totalNutrient.carbohydrate.sugar.fructose != null && (
                  <>
                    <div className="font-bold">Fruktoz:</div>
                    <div>{props.totalNutrient.carbohydrate.sugar.fructose}</div>
                  </>
                )}
                {props.totalNutrient.carbohydrate.sugar.lactose != null && (
                  <>
                    <div className="font-bold">Laktoz:</div>
                    <div>{props.totalNutrient.carbohydrate.sugar.lactose}</div>
                  </>
                )}
                {props.totalNutrient.carbohydrate.sugar.maltose != null && (
                  <>
                    <div className="font-bold">Maltoz:</div>
                    <div>{props.totalNutrient.carbohydrate.sugar.maltose}</div>
                  </>
                )}
                {props.totalNutrient.carbohydrate.sugar.galactose != null && (
                  <>
                    <div className="font-bold">Galaktoz:</div>
                    <div>
                      {props.totalNutrient.carbohydrate.sugar.galactose}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}

      <div className="mt-5 flex justify-end">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          1 Porsiyon ={" "}
          {props.totalNutrient.portion + " " + props.totalNutrient.portionUnit}
        </span>
      </div>
    </div>
  );
}
