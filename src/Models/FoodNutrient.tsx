import { Food } from "./Food";
import { FoodNutrientDerivation } from "./FoodNutrientDerivation";
import { Nutrient } from "./Nutrient";

export type FoodNutrient = {
    id: number; // Primary key
    foodId: number; //foreign key
    nutrient: Nutrient;
    dataPoints: number;
    median?: number;
    amount?: string;
}
