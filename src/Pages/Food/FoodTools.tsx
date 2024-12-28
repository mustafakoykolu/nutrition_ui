import { LipidType } from "../../Models/LipidType";

export function getTotalFat (LipidType : LipidType){
    if(LipidType)    return (LipidType.saturated ?? 0) + (LipidType.unsaturated ?? 0) + (LipidType.cholesterol ?? 0) + (LipidType.trans ?? 0)
    return 0
}