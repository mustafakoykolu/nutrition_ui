import { BaseType } from "../BaseType";

export type VitaminType = BaseType & {
    foodId: number;
    // Vitamin adları ve oranları
    vitaminA?: number; // Vitamin A
    vitaminB1?: number; // Vitamin B1 (Thiamine)
    vitaminB2?: number; // Vitamin B2 (Riboflavin)
    vitaminB3?: number; // Vitamin B3 (Niacin)
    vitaminB5?: number; // Vitamin B5 (Pantothenic Acid)
    vitaminB6?: number; // Vitamin B6
    vitaminB7?: number; // Vitamin B7 (Biotin)
    vitaminB9?: number; // Vitamin B9 (Folate)
    vitaminB12?: number; // Vitamin B12
    vitaminC?: number; // Vitamin C
    vitaminD?: number; // Vitamin D
    vitaminE?: number; // Vitamin E
    vitaminK?: number; // Vitamin K
    vitaminD3?: number; // Vitamin D3 (Cholecalciferol)
    vitaminA1?: number; // Retinol (Preformed Vitamin A)
    vitaminA2?: number; // Beta-Carotene (Pro-Vitamin A)
};
