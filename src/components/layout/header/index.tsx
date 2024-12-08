import { NavigationLink } from "@/types/navigation";
import Link from "next/link";
import React from "react";
import SearchBar from "./search-bar";
import Categories from "./categories";

const navigationLinks: NavigationLink[] = [
  {
    href: "/",
    label: "Anasayfa",
  },
  {
    href: "/hakkimizda",
    label: "Hakkımızda",
  },

  {
    href: "/hizmetlerimiz",
    label: "Hizmetlerimiz",
  },
  {
    href: "/magazalar",
    label: "Mağazalar",
  },
  {
    href: "/markalar",
    label: "Markalar",
  },
];

function Header() {
  return (
    <React.Fragment>
      <header className={"bg-primary w-full h-12"}>
        <nav className="container-fluid flex justify-between h-full">
          <ul className="flex items-center space-x-4 text-white">
            {navigationLinks.map((link, _idx) => (
              <li key={_idx} className="font-medium text-sm inline-block">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex text-white text-sm items-center space-x-2 divide-x-[1px] divide-white/30">
            <li className="pl-2">
              <Link href={"/iade-politikası"}>İade Politikası</Link>
            </li>
            <li className="pl-2">
              <Link href={"/yardim-merkezi"}>Yardım Merkezi</Link>
            </li>
            <li className="pl-2">
              <Link href={"/magaza-ac"}>Mağaza Aç</Link>
            </li>
            <li className="pl-2">
              <p>EN</p>
            </li>
            <li className="pl-2">
              <p>USD</p>
            </li>
          </ul>
        </nav>
      </header>
      <SearchBar />
      <Categories />
    </React.Fragment>
  );
}

export default Header;
