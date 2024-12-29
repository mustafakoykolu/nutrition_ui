import { BaseType } from "../BaseType";
import { LipidType } from "../Food/LipidType";
import { CarbohydrateType } from "../Food/CarbohydrateType";
import { VitaminType } from "../Food/VitaminType";
import { MineralType } from "../Food/MineralType";
export type NutrientType = BaseType & {
  kCal?: number;
  protein?: number;
  fat: LipidType;
  carbohydrate: CarbohydrateType;
  water?: number;
  nitrogen?: number;
  caffeine?: number;
  vitamin: VitaminType;
  mineral: MineralType;
  portion?: number;
  portionUnit?: string;
};
