import { useState } from "react";
import "./App.css";
import data from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newMenu = data.filter((item) => item.category === category);
    setMenu(newMenu);
    console.log(newMenu);
    console.log(category);
  };

  return (
    <div className="container">
      <Title title="Our Menu" />

      <Categories categories={categories} filterItem={filterItem} />

      <Menu menu={menu} />
    </div>
  );
};
export default App;
