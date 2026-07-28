import brand_logo from "../brand_logo.png";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={brand_logo} alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
