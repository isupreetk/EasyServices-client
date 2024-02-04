import "./Footer.scss";
import FacebookIcon from "../../assets/Icons/icon_facebook.svg";
import TwitterIcon from "../../assets/Icons/icon_twitter.svg";
import InstagramIcon from "../../assets/Icons/icon_instagram.svg";
import Company from "../../assets/images/company.png";

function Footer() {
  return (
    <div className="footer-dark footer__section">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item text">
              <h3>
                <a href="/services" className="footer__links">
                  Services
                </a>
              </h3>
              <ul>
                <li>
                  <p className="footer__item">Furniture Assembly</p>
                </li>
                <li>
                  <p className="footer__item">Plumbing</p>
                </li>
                <li>
                  <p className="footer__item">Patio & Backyard</p>
                </li>
                <li>
                  <p className="footer__item">Cleaning Services</p>
                </li>
                <li>
                  <p className="footer__item">Electrical & Lighting</p>
                </li>
                <li>
                  <p className="footer__item">Painting & Decoration</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item text">
              <h3>
                <a href="#heroText" className="footer__links">
                  About
                </a>
              </h3>
              <ul>
                <li>
                  <p className="footer__item">Transparent Pricing</p>
                </li>
                <li>
                  <p className="footer__item">Experts only</p>
                </li>
                <li>
                  <p className="footer__item">Fully equipped</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <img src={Company} alt="company name" />
              <p>
                A trusted solution for hassle-free services. From home
                maintenance to beauty treatments and expert consultations, this
                application connects the user with verified professionals. Say
                goodbye to uncertainty, hello to convenience!
              </p>
            </div>
            <div className="col item social">
              <a href="https://www.fb.com/">
                <img
                  src={FacebookIcon}
                  alt="fb"
                  className="icon ion-social-facebook"
                />
              </a>
              <a href="https://www.twitter.com/">
                <img
                  src={TwitterIcon}
                  alt="twitter"
                  className="icon ion-social-twitter"
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src={InstagramIcon}
                  alt="instagram"
                  className="icon ion-social-instagram"
                />
              </a>
            </div>
          </div>
          <p className="copyright">EasyServices © 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
