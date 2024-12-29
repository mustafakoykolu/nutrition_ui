import { BaseType } from "../BaseType";
import { LipidType } from "./LipidType";
import { CarbohydrateType } from "./CarbohydrateType";
import { VitaminType } from "./VitaminType";
import { MineralType } from "./MineralType";



export type FoodType = BaseType & {
  name: string;
  nameTr: string;
  kCal?: number;
  protein?: number;
  fat: LipidType;
  carbohydrate: CarbohydrateType;
  water?: number;
  nitrogen?: number;
  imageName?: string;
  benefits?: string;
  history?: string;
  portion?: number;
  portionUnit?: string;
  caffeine?: number;
  vitamin: VitaminType;
  mineral: MineralType;
};
