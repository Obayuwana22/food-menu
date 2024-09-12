const MenuItem = ({ img, title, price, desc }) => {
  return (
    <div className="food-card">
      <img src={img} alt={title} />
      <div className="item-title">
        <div className="item-name">{title} </div>
        <div className="item-price">${price}</div>
      </div>
      <p className="item-desc">{desc}</p>
    </div>
  );
};
export default MenuItem;
