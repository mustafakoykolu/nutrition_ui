import { BaseType } from "./BaseType";

export type LipidType = BaseType & {
    foodId: number;
    saturated?: number;
    unsaturated?: number;
    cholesterol?: number;
    trans?: number;
}