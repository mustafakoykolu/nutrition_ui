import { BaseType } from "./BaseType";

export type MineralType = BaseType & {
    calcium?: number;
    iron?: number;
    magnesium?: number;
    phosphorus?: number;
    potassium?: number;
    sodium?: number;
    zinc?: number;
    copper?: number;
    manganese?: number;
    selenium?: number;
    foodId: number;
};