import { CarbohydrateType } from "../../Models/Food/CarbohydrateType";
import { LipidType } from "../../Models/Food/LipidType";
import { SugarType } from "../../Models/Food/SugarType";

export function getTotalFat (LipidType : LipidType){
    if(LipidType)    return (LipidType.saturated ?? 0) + (LipidType.unsaturated ?? 0) + (LipidType.cholesterol ?? 0) + (LipidType.trans ?? 0)
    return 0
}

export function getTotalCarbohydrate (CarbohydrateType : CarbohydrateType){
    if(CarbohydrateType){
        return (CarbohydrateType.fiber ?? 0) + (CarbohydrateType.starch ?? 0) + getTotalSugar(CarbohydrateType.sugar)
    }    
    return 0
}
export function getTotalSugar (SugarType : SugarType){
    if(SugarType){
        return (SugarType.fructose ?? 0) + (SugarType.galactose ?? 0) + (SugarType.glucose ?? 0) + (SugarType.lactose ?? 0) + (SugarType.maltose ?? 0) + (SugarType.sucrose ?? 0)
    }    
    return 0
}