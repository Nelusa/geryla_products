import {HomeIcon, ShoppingCartIcon, TicketIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    path: '/',
    label: 'Home',
    icon: HomeIcon
  },
  {
    path: '/cart',
    label: 'Cart',
    icon: ShoppingCartIcon
  },
  {
    path: '/orders',
    label: 'Orders',
    icon: TicketIcon
  },
  {
    path: "/search",
    label: "Search",
    icon: MagnifyingGlassIcon
  }
]

const Navigation = () => {
  return (
    <nav className="rounded-t-[32px] shadow-[0_-5px_10px_0px_rgba(222,222,222,1)] py-8 px-12 bg-white">
      <ul className="flex gap-x-8 justify-between">
        {links.map((link) => (
          <li key={link.path} className="text-gray-400 hover:text-sky-600">
            <Link href={link.path}>
              <link.icon className="h-8 w-8" />
              <p className="sr-only">{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation