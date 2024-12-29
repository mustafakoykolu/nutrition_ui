import { BaseType } from "../BaseType";
import { MealFoodType } from "./MealFoodType";
import { NutrientType } from "./NutrientType";

export type MealType = BaseType & {
    name: string;
    description?: string; // Yemek açıklaması
    recipe: string;
    benefits: string;
    imagePath: string;
    history: string;
    totalNutrients: NutrientType;
    mealFoods: MealFoodType[];
};
