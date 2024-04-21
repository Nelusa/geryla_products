"use client"
import { useQuery } from 'react-query';
import {useEffect, useRef} from "react";
import {fetchCategories} from "@/library/services/categories";
import CategoryType from "@/library/types/Category";

const Categories = () => {
  const { data: categories, isError, isLoading } = useQuery('categories', fetchCategories);
  const scrollRef = useRef(null);
  const chevronLeftRef = useRef(null);
  const chevronRightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current === null) return;

      const { scrollWidth, scrollLeft, offsetWidth } = scrollRef.current;
      if (scrollLeft === 0) {
        chevronLeftRef.current.classList.add('hidden');
      } else {
        chevronLeftRef.current.classList.remove('hidden');
      }
      if (scrollLeft + offsetWidth >= scrollWidth) {
        chevronRightRef.current.classList.add('hidden');
      } else {
        chevronRightRef.current.classList.remove('hidden');
      }
    };

    const initScrollArrows = () => {
      handleScroll();
    };

    window.addEventListener('resize', initScrollArrows);
    scrollRef.current?.addEventListener('scroll', handleScroll);

    initScrollArrows();

    return () => {
      window.removeEventListener('resize', initScrollArrows);
      scrollRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading categories.</div>;

  return (
    <div id="tab-1" className="flex items-center space-x-2">
      <button ref={chevronLeftRef} className="hidden px-2">{"<"}</button>
      <div ref={scrollRef} className="flex overflow-auto whitespace-nowrap scroll-smooth">
        {categories.map((category: CategoryType) => (
          <div key={category.id} className="inline-block p-4">
            {category.name}
          </div>
        ))}
      </div>
      <button ref={chevronRightRef} className="px-2">{">"}</button>
    </div>
  );
}

export default Categories
