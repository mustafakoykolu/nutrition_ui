import { FoodNutrient } from "./FoodNutrient";

export type Food= {
    foodClas:string;
    description: string;
    descriptionTr: string;
    foodNutrients: FoodNutrient[];
    imageName: string;
}