import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

interface SearchInputProps {
  onFilterChange: (value: string) => void;
}

const SearchInput = ({onFilterChange}: SearchInputProps) => {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-lg border-0 py-3 pl-10 text-lg text-gray-900 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          placeholder="Find your food"
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchInput