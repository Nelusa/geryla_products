"use client"
import {useQuery} from "react-query";
import Meal from "@/library/components/Meal";
import MealType from "@/library/types/Meal";
import {fetchMeals} from "@/library/services/meals";

const Meals = () => {
  const {data: meals, isError, isLoading} = useQuery('meals', fetchMeals);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading meals.</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {meals.map((meal: MealType) => (
       <Meal meal={meal} key={meal.id}/>
      ))}
    </div>
  );
}

export default Meals
