import "./Navbar.css";
import logo from '../../logo.svg'
import hamburger from "../../hamburger.svg";
const Navbar = () => {
  return (
    <>
      <header>
        <span className="logo">
          <a href="index.html">
            <img src={logo} alt="Davoc logo" />
          </a>
        </span>
        <ul id="menu" class="menu">
          <li className="item">
            <a href="https://github.com/worldsalt3/React-class/blob/main/src/App.js" class="home">
              Home
            </a>
          </li>
          <li className="item">
            <a href="services.html">Services</a>
          </li>
          <li className="item">
            <a href=".#">Case</a>
          </li>
          <li className="item">
            <a href="./">Davoc Specialist</a>
          </li>
          <li className="item">
            <a href=".#">Blog</a>
          </li>
          <li className="item no_item">
            <a href=".#">Request a quote</a>
          </li>
        </ul>
        <span className="bars">
          <img src={hamburger} alt="hamburger icon" />
        </span>
        <span className="close">&times;</span>
      </header>
    </>
  );
};

export default Navbar;
