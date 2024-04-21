import Categories from "@/library/components/Categories";
import Meals from "@/library/components/Meals";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between py-10">
      <div className="flex flex-col text-3xl">
        <h1 className="text-left w-full">Find and order</h1>
        <h1 className="font-bold text-left w-full">food and drinks</h1>
      </div>
      <Categories/>
      <Meals/>
    </main>
  );
}
