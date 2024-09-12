const Categories = ({ categories, filterItem }) => {
  return (
    <div className="menu-category">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className="btn"
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
