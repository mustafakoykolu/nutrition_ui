import { BaseType } from "./BaseType";

export type SugarType = BaseType & {
    carbohydrateId: number;
    sucrose?: number;
    glucose?: number;
    fructose?: number;
    lactose?: number;
    maltose?: number;
    galactose?: number;
};