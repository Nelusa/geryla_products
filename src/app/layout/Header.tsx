import {Bars3BottomLeftIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex justify-between">
      <span className="relative inline-block rounded-full p-3 shadow-md hover:bg-gray-100 cursor-pointer">
        <Bars3BottomLeftIcon
          className="h-6 w-6 rounded-md"
        />
      </span>
      <span className="relative inline-block rounded-full p-3 shadow-md hover:bg-gray-100 cursor-pointer">
        <ShoppingCartIcon
          className="h-6 w-6 rounded-md"
        />
        <span className="absolute -top-1 right-1 block translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-white hover:bg-gray-100 cursor-pointer">
          <span className="block h-2.5 w-2.5 rounded-full bg-red-500" />
        </span>
      </span>
    </header>
  )
}

export default Header