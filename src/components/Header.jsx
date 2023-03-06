import { useState } from "react";

const Header = () => {
  const [state, setState] = useState(false);
  return (
    <header>
      <div className="container">
        <a href="#" className="header__logo">
          <img src="./images/logo.svg" alt="logo" />
        </a>
        <button
          className={`nav__icon${state ? " active" : ""}`}
          onClick={() => setState(!state)}
        >
          <img src="./images/icon-hamburger.svg" alt="nav icon" />
        </button>
        <nav className="header__nav">
          <ul className="header__nav__links">
            <li className="header__nav__link">
              <a href="#">Home</a>
            </li>
            <li className="header__nav__link">
              <a href="#">About</a>
            </li>
            <li className="header__nav__link">
              <a href="#">Contact</a>
            </li>
            <li className="header__nav__link">
              <a href="#">Blog</a>
            </li>
            <li className="header__nav__link">
              <a href="#">Careers</a>
            </li>
          </ul>
        </nav>
        <button className="invite__btn">Request Invite</button>
      </div>
    </header>
  );
};

export default Header;
