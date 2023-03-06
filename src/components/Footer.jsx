const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo__grp">
          <a href="/" className="footer__logo">
            <img src="./images/footer-logo.svg" alt="footer logo" />
          </a>
          <ul className="social__links">
            <li>
              <a href="#" className="social__link">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social__link">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social__link">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social__link">
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social__link">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__grp">
          <nav className="footer__nav">
            <ul className="footer__nav__links">
              <ul>
                <li>
                  <a href="#" className="footer__nav__link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav__link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav__link">
                    Blog
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="footer__nav__link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav__link">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav__link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </ul>
          </nav>
          <div className="rights__grp">
            <button className="invite__btn">Request Invite</button>
            <p className="rights">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
