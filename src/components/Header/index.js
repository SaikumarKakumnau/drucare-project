import "./index.css";

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <h1 className="logo-heading">DruCare</h1>
    </div>
    <ul className="list-container">
      <li className="list-item">Solutions</li>
      <li className="list-item">Pricing</li>
      <li className="list-item">Company</li>
      <li className="list-item">Blogs</li>
    </ul>
    <div className="button-container">
      <button type="button" className="login-button">
        Login
      </button>
      <button type="button" className="signUp-button">
        Sign Up
      </button>
    </div>
  </div>
);

export default Header;
