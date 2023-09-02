import "./Footer.scss";
import { FacebookIcon } from "../../assets/Icons/icon_facebook.svg";
import { TwitterIcon } from "../../assets/Icons/icon_twitter.svg";
import { InstagramIcon } from "../../assets/Icons/icon_instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content footer__content--left">
          <p className="footer__item">Logo</p>
          <p className="footer__item">© 2023 Company, Inc</p>
        </div>

        <div className="footer__content footer__content--right">
          <p className="footer__item">Connect with us</p>
          <div className="footer__image">
            <img
              src={TwitterIcon}
              alt="twitter"
              className="footer__item footer__item--image"
            />
            <img
              src={FacebookIcon}
              alt="facebook"
              className="footer__item footer__item--image"
            />
            <img
              src={InstagramIcon}
              alt="instagram"
              className="footer__item footer__item--image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
