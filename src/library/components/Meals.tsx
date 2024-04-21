"use client"
import {useQuery} from "react-query";
import Meal from "@/library/components/Meal";
import MealType from "@/library/types/Meal";
import {fetchMeals} from "@/library/services/meals";
import Spinner from "@/library/components/Spinner";

interface MealsByCategory {
  [key: string]: MealType[];
}

interface MealsProps {
  filter: string;
}

const Meals = ({filter}: MealsProps) => {
  const {data: meals, isError, isLoading} = useQuery('meals', fetchMeals);

  const mealsByCategory = meals?.reduce((acc: MealsByCategory, meal: MealType) => {
    meal.categories.forEach((category: string) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(meal);
    });
    return acc;
  }, {});


  if (isLoading) return <Spinner/>;
  if (isError) return <p>Error loading meals.</p>;

  return (
    Object.entries(mealsByCategory).map(([categoryName, meals]) => {
      const filteredMeals: MealType[] = (meals as MealType[]).filter((meal) =>
        meal.name.toLowerCase().includes(filter)
      );

      if (filteredMeals.length > 0) {
        return (
          <section key={categoryName} id={`category-content-${categoryName.toLowerCase()}`}>
            <h2 className="text-2xl font-medium">{categoryName}</h2>
            <div className="grid grid-cols-1 gap-4 px-2 py-2">
              {filteredMeals.map((meal) => (
                <Meal key={meal.id} meal={meal} />
              ))}
            </div>
          </section>
        );
      }
      return null;
    })
  );
}

export default Meals
