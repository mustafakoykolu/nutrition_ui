import { Food } from "../../../Models/Food";

type Props = {
  food: Food
}
export default function FoodDetailValue(props:Props) {
  return (
    <div id="food-values">
      <h1 className="font-bold text-xl mb-3">Ananasın Besin Değerleri</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="font-bold">Kalori:</div>
        <div>{props.food.kCal}</div>
        <div className="font-bold">Karbonhidrat:</div>
        <div>{props.food.carbs}</div>
        <div className="font-bold">Protein:</div>
        <div>{props.food.protein}</div>
        <div className="font-bold">Yağ:</div>
        <div>{props.food.fat}</div>
        <div className="font-bold">Lif:</div>
        <div>{props.food.fiber}</div>
        <div className="font-bold">Şeker:</div>
        <div>{props.food.sugar}</div>
        <div className="font-bold">Tuz:</div>
        <div>{props.food.salt}</div>
        <div className="font-bold">Demir:</div>
        <div>{props.food.iron}</div>
        <div className="font-bold">Vitamin A:</div>
        <div>{props.food.vitaminA}</div>
        <div className="font-bold">Vitamin C:</div>
        <div>{props.food.vitaminC}</div>
        <div className="font-bold">Vitamin D:</div>
        <div>{props.food.vitaminD}</div>
        <div className="font-bold">Vitamin E:</div>
        <div>{props.food.vitaminE}</div>
        <div className="font-bold">Vitamin K:</div>
        <div>{props.food.vitaminK}</div>
        <div className="font-bold">Vitamin B1:</div>
        <div>{props.food.vitaminB1}</div>
        <div className="font-bold">Vitamin B2:</div>
        <div>{props.food.vitaminB2}</div>
        <div className="font-bold">Vitamin B3:</div>
        <div>{props.food.vitaminB3}</div>
        <div className="font-bold">Vitamin B5:</div>
        <div>{props.food.vitaminB5}</div>
        <div className="font-bold">Vitamin B6:</div>
        <div>{props.food.vitaminB6}</div>
        <div className="font-bold">Vitamin B7:</div>
        <div>{props.food.vitaminB7}</div>
        <div className="font-bold">Vitamin B9:</div>
        <div>{props.food.vitaminB9}</div>
        <div className="font-bold">Vitamin B12:</div>
        <div>{props.food.vitaminB12}</div>
        <div className="font-bold">Kalsiyum:</div>
        <div>{props.food.calcium}</div>
        <div className="font-bold">Fosfor:</div>
        <div>{props.food.phosphorus}</div>
        <div className="font-bold">Magnezyum:</div>
        <div>{props.food.magnesium}</div>
        <div className="font-bold">Çinko:</div>
        <div>{props.food.zinc}</div>
        <div className="font-bold">Bakır:</div>
        <div>{props.food.copper}</div>
        <div className="font-bold">Mangan:</div>
        <div>{props.food.manganese}</div>
        <div className="font-bold">Selenyum:</div>
        <div>{props.food.selenium}</div>
        <div className="font-bold">Potasyum:</div>
        <div>{props.food.potassium}</div>
        <div className="font-bold">Sodyum:</div>
        <div>{props.food.sodium}</div>
        <div className="font-bold">Kolesterol:</div>
        <div>{props.food.cholesterol}</div>
        <div className="font-bold">Kafein:</div>
        <div>{props.food.caffeine}</div>
      </div> */}
    </div>
  );
}
