import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import style from './style.css';
import index from "./index.css"
/*import Navbar from "../NavbarUser"*/

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App2 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      
      <section className="menu section">
        <div className="info-rest">
          <h4>Lista restaurante</h4>
          <div>
           <h5></h5> 
          </div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App2;