import clsx from "clsx";

type Props = {
  currentMenu: string;
  setValuesForm: any;
  foodName: string;
};
export default function AddFoodDetailValue(props: Props) {
  return (
    <div
      id="food-values"
      className={clsx({ hidden: props.currentMenu !== "foodValue" })}
    >
      <form
        onChange={(event: any) => {
          const formData: Record<string, string> = {};
          Array.from(event.target.form.elements).forEach((element: any) => {
            if (element.id) {
              formData[element.id] = element.value;
            }
          });
          props.setValuesForm(formData);
        }}
      >
        <h1 className="font-bold text-xl mb-3">Genel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Kalori:</div>
          <div className="flex">
            <input
              id="kCal"
              name="kCal"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>kcal</span>
          </div>
          <div className="font-bold">Protein:</div>
          <div className="flex">
            <input
              id="protein"
              name="protein"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>

          <div className="font-bold">Su:</div>
          <div className="flex">
            <input
              id="water"
              name="water"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Azot:</div>
          <div className="flex">
            <input
              id="nitrogen"
              name="nitrogen"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>

          <div className="font-bold">Kafein:</div>
          <div className="flex">
            <input
              id="caffeine"
              name="caffeine"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
        </div>
        <h1 className="font-bold text-xl mt-5 mb-3">Vitamin</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Vitamin A:</div>
          <div className="flex">
            <input
              id="vitaminA"
              name="vitaminA"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>IU</span>
          </div>
          <div className="font-bold">Vitamin B1:</div>
          <div className="flex">
            <input
              id="vitaminB1"
              name="vitaminB1"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B2:</div>
          <div className="flex">
            <input
              id="vitaminB2"
              name="vitaminB2"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B3:</div>
          <div className="flex">
            <input
              id="vitaminB3"
              name="vitaminB3"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B5:</div>
          <div className="flex">
            <input
              id="vitaminB5"
              name="vitaminB5"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B6:</div>
          <div className="flex">
            <input
              id="vitaminB6"
              name="vitaminB6"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B7:</div>
          <div className="flex">
            <input
              id="vitaminB7"
              name="vitaminB7"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin B9:</div>
          <div className="flex">
            <input
              id="vitaminB9"
              name="vitaminB9"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin B12:</div>
          <div className="flex">
            <input
              id="vitaminB12"
              name="vitaminB12"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin C:</div>
          <div className="flex">
            <input
              id="vitaminC"
              name="vitaminC"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin D:</div>
          <div className="flex">
            <input
              id="vitaminD"
              name="vitaminD"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin E:</div>
          <div className="flex">
            <input
              id="vitaminE"
              name="vitaminE"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin K:</div>
          <div className="flex">
            <input
              id="vitaminK"
              name="vitaminK"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin D3:</div>
          <div className="flex">
            <input
              id="vitaminD3"
              name="vitaminD3"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Retinol:</div>
          <div className="flex">
            <input
              id="vitaminA1"
              name="vitaminA1"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>IU</span>
          </div>
          <div className="font-bold">Beta-Carotene:</div>
          <div className="flex">
            <input
              id="vitaminA2"
              name="vitaminA2"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>IU</span>
          </div>
        </div>
        <h1 className="font-bold text-xl mt-5 mb-3">Minerals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Kalsiyum:</div>
          <div className="flex">
            <input
              id="calcium"
              name="calcium"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Demir:</div>
          <div className="flex">
            <input
              id="iron"
              name="iron"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Magnezyum:</div>
          <div className="flex">
            <input
              id="magnesium"
              name="magnesium"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Fosfor:</div>
          <div className="flex">
            <input
              id="phosphorus"
              name="phosphorus"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Potasyum:</div>
          <div className="flex">
            <input
              id="potassium"
              name="potassium"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Sodyum:</div>
          <div className="flex">
            <input
              id="sodium"
              name="sodium"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Çinko:</div>
          <div className="flex">
            <input
              id="zinc"
              name="zinc"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Bakır:</div>
          <div className="flex">
            <input
              id="copper"
              name="copper"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Manganez:</div>
          <div className="flex">
            <input
              id="manganese"
              name="manganese"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Selenyum:</div>
          <div className="flex">
            <input
              id="selenium"
              name="selenium"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
        </div>
        <h1 className="font-bold text-xl mt-5 mb-3">Yağ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Doymuş Yağ:</div>
          <div className="flex">
            <input
              id="saturated"
              name="saturated"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Doymamış Yağ:</div>
          <div className="flex">
            <input
              id="unsaturated"
              name="unsaturated"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Kolesterol:</div>
          <div className="flex">
            <input
              id="cholesterol"
              name="cholesterol"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Trans Yağ:</div>
          <div className="flex">
            <input
              id="trans"
              name="trans"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
        </div>
        <h1 className="font-bold text-xl mt-5 mb-3">Karbonhidrat</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Sükroz:</div>
          <div className="flex">
            <input
              id="sucrose"
              name="sucrose"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Glukoz:</div>
          <div className="flex">
            <input
              id="glucose"
              name="glucose"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Fruktoz:</div>
          <div className="flex">
            <input
              id="fructose"
              name="fructose"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Laktoz:</div>
          <div className="flex">
            <input
              id="lactose"
              name="lactose"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Maltoz:</div>
          <div className="flex">
            <input
              id="maltose"
              name="maltose"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
          <div className="font-bold">Galaktoz:</div>
          <div className="flex">
            <input
              id="galactose"
              name="galactose"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>g</span>
          </div>
        </div>
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Porsiyon:</div>
          <div className="flex ">
            <input
              id="portion"
              name="portion"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <select id="portionUnit" name="portionUnit">
              <option></option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="mg">mg</option>
              <option value="L">L</option>
              <option value="mL">mL</option>
              <option value="oz">oz</option>
              <option value="lb">lb</option>
              <option value="cup">Fincan</option>
              <option value="tableSpoon">Yemek Kaşığı</option>
              <option value="teaSpoon">Çay Kaşığı</option>
              <option value="piece">Adet</option>
              <option value="slice">Dilim</option>
              <option value="serving">Porsiyon</option>
              <option value="bottle">Şişe</option>
              <option value="can">Kutu</option>
              <option value="package">Paket</option>
              <option value="bowl">Kase</option>
              <option value="plate">Tabak</option>
            </select>
          </div>
        </div>

        {/* <div>

        <div className="font-bold">Porsiyon:</div>
          <div className="flex">
            <input
              id="portion"
              name="portion"
              type="number"
              placeholder="0.00"
              className="w-20 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <select id="portionUnit" name="portionUnit">
              <option></option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="mg">mg</option>
              <option value="L">L</option>
              <option value="mL">mL</option>
              <option value="oz">oz</option>
              <option value="lb">lb</option>
              <option value="cup">Fincan</option>
              <option value="tableSpoon">Yemek Kaşığı</option>
              <option value="teaSpoon">Çay Kaşığı</option>
              <option value="piece">Adet</option>
              <option value="slice">Dilim</option>
              <option value="serving">Porsiyon</option>
              <option value="bottle">Şişe</option>
              <option value="can">Kutu</option>
              <option value="package">Paket</option>
              <option value="bowl">Kase</option>
              <option value="plate">Tabak</option>
            </select>
          </div>          
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="font-bold">Kalori:</div>
          <div className="flex">
            <input
              id="kCal"
              name="kCal"
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
              id="vitaminA"
              name="vitaminA"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>IU</span>
          </div>
          <div className="font-bold">Vitamin C:</div>
          <div className="flex">
            <input
              id="vitaminC"
              name="vitaminC"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin D:</div>
          <div className="flex">
            <input
              id="vitaminD"
              name="vitaminD"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin E:</div>
          <div className="flex">
            <input
              id="vitaminE"
              name="vitaminE"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin K:</div>
          <div className="flex">
            <input
              id="vitaminK"
              name="vitaminK"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin B1:</div>
          <div className="flex">
            <input
              id="vitaminB1"
              name="vitaminB1"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B2:</div>
          <div className="flex">
            <input
              id="vitaminB2"
              name="vitaminB2"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B3:</div>
          <div className="flex">
            <input
              id="vitaminB3"
              name="vitaminB3"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B5:</div>
          <div className="flex">
            <input
              id="vitaminB5"
              name="vitaminB5"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B6:</div>
          <div className="flex">
            <input
              id="vitaminB6"
              name="vitaminB6"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div>
          <div className="font-bold">Vitamin B7:</div>
          <div className="flex">
            <input
              id="vitaminB7"
              name="vitaminB7"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin B9:</div>
          <div className="flex">
            <input
              id="vitaminB9"
              name="vitaminB9"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>µg</span>
          </div>
          <div className="font-bold">Vitamin B12:</div>
          <div className="flex">
            <input
              id="vitaminB12"
              name="vitaminB12"
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
          <div className="font-bold">Manganez:</div>
          <div className="flex">
            <input
              id="manganese"
              name="manganese"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
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
            <span>µg</span>
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
          <div className="font-bold">Kafein:</div>          <div className="flex">
            <input
              id="caffeine"
              name="caffeine"
              type="text"
              placeholder="0.00"
              className="w-14 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
            />
            <span>mg</span>
          </div> */}
        <div></div>
      </form>
    </div>
  );
}
