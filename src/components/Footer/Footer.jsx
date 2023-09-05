import "./Footer.scss";
import FacebookIcon from "../../assets/Icons/icon_facebook.svg";
import TwitterIcon from "../../assets/Icons/icon_twitter.svg";
import InstagramIcon from "../../assets/Icons/icon_instagram.svg";
import Company from "../../assets/images/company.png";

function Footer() {
  return (
    // <footer className="footer">
    //   <div className="footer__container">
    //     <div className="footer__content footer__content--left">
    //       <p className="footer__item">Logo</p>
    //       <p className="footer__item">© 2023 Company, Inc</p>
    //     </div>

    //     <div className="footer__content footer__content--right">
    //       <p className="footer__item">Connect with us</p>
    //       <div className="footer__image">
    //         <img
    //           src={TwitterIcon}
    //           alt="twitter"
    //           className="footer__item footer__item--image"
    //         />
    //         <img
    //           src={FacebookIcon}
    //           alt="facebook"
    //           className="footer__item footer__item--image"
    //         />
    //         <img
    //           src={InstagramIcon}
    //           alt="instagram"
    //           className="footer__item footer__item--image"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              {/* <ul>
                <li>
                  <a href="#">Furniture Assembly</a>
                </li>
                <li>
                  <a href="#">Plumbing</a>
                </li>
                <li>
                  <a href="#">Patio & Backyard</a>
                </li>
                <li>
                  <a href="#">Cleaning Services</a>
                </li>
                <li>
                  <a href="#">Electrical & Lighting</a>
                </li>
                <li>
                  <a href="#">Painting & Decoration</a>
                </li>
              </ul> */}
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              {/* <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul> */}
            </div>
            <div class="col-md-6 item text">
              <img src={Company} alt="company name" />
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col item social">
              <a href="www.fb.com">
                <img
                  src={FacebookIcon}
                  alt="fb"
                  class="icon ion-social-facebook"
                />
              </a>
              <a href="www.twitter.com">
                <img
                  src={TwitterIcon}
                  alt="twitter"
                  class="icon ion-social-twitter"
                />
              </a>
              <a href="www.instagram.com">
                <img
                  src={InstagramIcon}
                  alt="instagram"
                  class="icon ion-social-instagram"
                />
              </a>
            </div>
          </div>
          <p class="copyright">EasyServices © 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
