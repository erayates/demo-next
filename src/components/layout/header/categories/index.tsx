import { Grid3x3 } from "lucide-react";
import React from "react";

function Categories() {
  return (
    <section id="categories" className="border-t border-b border-secondary/50">
      <div className="container-fluid">
        <button className="flex px-4 py-3 font-medium text-sm items-center text-secondary border-l border-r">
          <Grid3x3 className="mr-2" /> Kategoriler
        </button>
      </div>
    </section>
  );
}

export default Categories;
