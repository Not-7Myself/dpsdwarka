import "../styles/NavBar.css";
import "../App.css";

import logo from "../logo.png";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <div className="logo">
          <img src={logo} alt="DPS" />
          <h2>DPS, Dwarka</h2>
        </div>
        <div className="links">
          <li>Home</li>
          <li>About Us</li>
          <li>Academics</li>
          <li>Infrastructure</li>
          <li>Admissions</li>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
      </ul>
    </nav>
  );
}
