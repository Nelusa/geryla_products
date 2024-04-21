export default interface MealType {
  id: string;
  createdAt: string;
  name: string;
  categories: string[];
  shortDesc: string;
  longDesc: string;
  price: number;
  priceAction?: number;
  labels: string[];
  image: {
    name: string;
    url: string;
    size: string;
    alt: string;
  };
  currency: string;
}