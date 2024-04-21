import Image from "next/image";
import MealType from "@/library/types/Meal";

const Meal = ({ meal }: {meal: MealType}) => {
  return (
    <div key={meal.id} className="border p-4">
      <Image width={200} height={200} src={meal.image.url} alt={meal.image.alt} className="w-full h-40 object-cover"/>
      <h2 className="mt-2 font-bold">{meal.name}</h2>
      <p>{meal.shortDesc}</p>
      <div className="text-gray-600">${meal.priceAction} <span
        className="line-through text-red-500">${meal.price}</span></div>
    </div>
  )
}

export default Meal