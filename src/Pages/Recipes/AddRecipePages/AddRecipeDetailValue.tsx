import clsx from "clsx";

type Props = {
  currentMenu: string;
};
export default function AddRecipeDetailValue(props: Props) {
  return (
    <div
      id="food-values"
      className={clsx({ hidden: props.currentMenu !== "foodValue" })}
    >
      <h1 className="font-bold text-xl mb-3">Ananasın Besin Değerleri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="font-bold">Kalori:</div>
        <div className="flex">
          <input
            id="kcal"
            name="kcal"
            type="text"
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
            placeholder="0.00"
            className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
          />
          <span>mg</span>
        </div>
        <div className="font-bold">Vitamin B2:</div>
        <div className="flex">
          <input
            id="vitamin-b2"
            name="vitamin-e"
            type="text"
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
            placeholder="0.00"
            className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
          />
          <span>mg</span>
        </div>
      </div>
    </div>
  );
}
