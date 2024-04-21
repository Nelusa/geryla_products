"use client"
import Categories from "@/library/components/Categories";
import Meals from "@/library/components/Meals";
import SearchInput from "@/library/components/SearchInput";
import {useState} from "react";

export default function Home() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter.toLowerCase());
  };

  return (
    <main className="flex min-h-screen flex-col py-10 gap-y-8">
      <div className="flex flex-col text-3xl w-full text-left">
        <h1 className="font-light">Find and order</h1>
        <h1 className="font-bold">food and drinks</h1>
      </div>
      <SearchInput onFilterChange={handleFilterChange}/>
      <Categories/>
      <Meals filter={filter}/>
    </main>
  );
}
