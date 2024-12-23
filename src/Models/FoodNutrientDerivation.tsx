import { FoodNutrientSource } from "./FoodNutrientSource";

export type FoodNutrientDerivation = {
    Id?: number; // Optional, or derive another unique key
    Code: string;
    Description: string;
    FoodNutrientSource: FoodNutrientSource;
};