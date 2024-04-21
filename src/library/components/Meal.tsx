import Image from "next/image";
import MealType from "@/library/types/Meal";

const Meal = ({ meal }: {meal: MealType}) => {
  return (
    <div className="flex items-center justify-between gap-x-4 shadow-md rounded-xl p-4">
      <div className="flex gap-x-6">
        <Image width={80} height={80} src={meal.image.url} alt={meal.image.alt} className="max-w-1/4 aspect-square flex-shrink rounded-lg"/>
        <div>
          <h2 className="mt-2 font-semibold">{meal.name}</h2>
          <p className="text-sm">{meal.shortDesc}...</p>
        </div>
      </div>
      <div className="whitespace-nowrap text-end">
        <div className="line-through text-gray-400 text-sm">{meal.price} €</div>
        <div className="text-green-600 font-semibold text-lg">{meal.priceAction} €</div>
      </div>
    </div>
  )
}

export default Meal