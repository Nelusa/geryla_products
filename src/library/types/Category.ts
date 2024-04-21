import MealType from "@/library/types/Meal";

export default interface CategoryType {
  id: number;
  name: string;
  image: string;
  description: string;
  products: MealType[];
}