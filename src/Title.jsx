import "./App.css";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="menu-title">{title || "Default text"}</h1>
      <div className="title-underline"></div>
    </div>
  );
};
export default Title;
