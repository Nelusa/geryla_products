"use client"
import {useQuery, UseQueryResult} from 'react-query';
import {useEffect, useRef, useState} from "react";
import {fetchCategories} from "@/library/services/categories";
import CategoryType from "@/library/types/Category";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import Spinner from "@/library/components/Spinner";
import {classNames} from "@/library/utils/helpers";

interface ScrollRefType extends HTMLDivElement {}
interface ChevronRefType extends HTMLButtonElement {}

const Categories = () => {
  const { data: categories, isError, isLoading }: UseQueryResult<CategoryType[], Error> = useQuery('categories', fetchCategories);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const scrollRef = useRef<ScrollRefType | null>(null);
  const chevronLeftRef = useRef<ChevronRefType | null>(null);
  const chevronRightRef = useRef<ChevronRefType | null>(null);

  const handleScrollToCategory = (categoryName: string) => {
    setActiveCategoryId(categoryName);

    const targetElement = document.getElementById(`category-content-${categoryName}`);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current || !chevronLeftRef.current || !chevronRightRef.current) {
      return;
    }

    const { scrollWidth, scrollLeft, offsetWidth } = scrollRef.current;
    chevronLeftRef.current.style.display = scrollLeft > 0 ? 'block' : 'none';
    chevronRightRef.current.style.display = scrollLeft + offsetWidth < scrollWidth ? 'block' : 'none';
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    scrollRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
      scrollRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) return <Spinner/>;
  if (isError) return <p>Error loading categories.</p>;

  return (
    <div id="tab-1" className="flex items-center space-x-2">
      <button ref={chevronLeftRef} className="hidden px-2 text-gray-600" onClick={() => scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' })}>
        <ChevronLeftIcon className="w-6 h-6"/>
      </button>
      <div ref={scrollRef} onScroll={handleScroll} className="flex gap-x-2 overflow-auto whitespace-nowrap scroll-smooth no-scrollbar">
        {categories?.map((category: CategoryType) => (
          <div key={category.id} className={classNames("inline-block p-4 border rounded-full shadow py-1.5 cursor-pointer", activeCategoryId === category.name.toLowerCase() && "border-sky-600")} onClick={() => handleScrollToCategory(category.name.toLowerCase())}>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <button ref={chevronRightRef} className="px-2 text-gray-600" onClick={() => scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' })}>
        <ChevronRightIcon className="w-6 h-6"/>
      </button>
    </div>
  );
}

export default Categories
