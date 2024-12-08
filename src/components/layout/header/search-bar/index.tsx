import React from "react";
import { BellRing, Heart, Search } from "lucide-react";

function SearchBar() {
  return (
    <section id="search-bar" className="container-fluid py-8">
      <div className="grid grid-cols-2">
        <div className="relative flex items-center">
          <input
            type="text"
            className="rounded-2xl text-xs font-semibold px-8 py-4 outline-none bg-light w-full"
            placeholder="Aradığınız ürün veya markayı yazınız.."
          />
          <button className="bg-primary p-2 rounded-full text-white absolute right-2">
            <Search size={16} />
          </button>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <button className="text-secondary rounded-2xl">
            <Heart />
          </button>

          <button className="text-secondary rounded-2xl">
            <BellRing />
          </button>

          <button className="text-primary border-2 font-medium text-sm border-primary rounded-full px-8 py-2">
            İlan Giriş
          </button>

          <button className="text-white bg-primary border-2 font-medium text-sm border-primary rounded-full px-8 py-2">
            Üye Giriş
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
