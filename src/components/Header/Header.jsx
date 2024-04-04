import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/logo.png";
import Company from "../../assets/images/company.png";
import "./Header.scss";
import { useState, useEffect, useNavigate } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/Icons/hamburger.svg";
import closeX from "../../assets/Icons/closingX.svg";

function Header({ username }) {
  const [user, setUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const username1 = localStorage.getItem("username");
    if (username1) {
      setUser(username1);
    }
  }, [username]);

  const serviceProvider = localStorage.getItem("service_provider");

  /*
   * Logout of application, clears localStorage JWT token and set state to logged out
   */
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("service_provider");
    setUser("");
  };

  return (
    <>
      <div className="header">
        <div className="header__logo-container">
          <img className="header__logo" src={Logo} alt="logo" />
          <img src={Company} className="header__logo-name" alt="company name" />
        </div>
        <div className="header__links-container">
          {/* Service provider profile */}
          {serviceProvider === "true" ? (
            <Link as={NavLink} className="header__links" href="/feed">
              Feed
            </Link>
          ) : (
            <Link as={NavLink} className="header__links" href="/services">
              Services
            </Link>
          )}
          {/* if logged in and not a service provider */}
          {user && serviceProvider === "false" ? (
            <Link as={NavLink} className="header__links" href="/bookings">
              My Bookings
            </Link>
          ) : (
            <Link></Link>
          )}
          <Link as={NavLink} className="header__links" href="/support">
            Support
          </Link>
        </div>
        <div className="header__login-container">
          <div>
            {/* if logged in */}
            {user ? (
              <div>
                <Link className="header__links">Welcome, {user}</Link>
                <Link
                  className="header__links"
                  eventKey={2}
                  href="/login"
                  onClick={handleLogout}
                >
                  Log Out
                </Link>
              </div>
            ) : (
              <div>
                <Link href="/signUp" className="header__links">
                  Sign Up
                </Link>
                <Link eventKey={2} href="/login" className="header__links">
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar__top">
          <div className="navbar__left">
            <img
              src={isOpen ? closeX : menuIcon}
              alt="close X icon"
              onClick={() => setIsOpen((prev) => !prev)}
              className="navbar__menu"
            />
            <p className="navbar__logo" onClick={() => navigate("/")}>
              Crisis Connect
            </p>
          </div>
          {/* <Avatar photoUrl="/images/profile/CurrentUser.jpg" modifier="--nav" /> */}
        </div>

        {/* Links */}
        {isOpen && (
          <div className="navbar__links">
            <Link
              onClick={() => setIsOpen(false)}
              className="navbar__link"
              to="/"
            >
              Current Disasters
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="navbar__link"
              to="#"
            >
              About Us
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="navbar__link"
              to="#"
            >
              How you can help
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="navbar__link"
              to="#"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
