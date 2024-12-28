import { BaseType } from "./BaseType";
import { SugarType } from "./SugarType";


export type CarbohydrateType = BaseType & {
    foodId: number;
    sugar: SugarType;
    fiber?: number;
    starch?: number;
};
