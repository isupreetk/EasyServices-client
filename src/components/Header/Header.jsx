import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/logo.png";
import Company from "../../assets/images/company.png";
import "./Header.scss";
import { useState, useEffect } from "react";

function Header({ username }) {
  const [user, setUser] = useState("");

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
    // <Navbar expand="lg" className=" navbar navbar-dark bg-dark">
    //   <Container fluid className="header__links">
    //     <Navbar.Brand href="/services">
    //       <img
    //         className="logo"
    //         src={Logo}
    //         alt="logo"
    //         style={{ maxHeight: "35px" }}
    //       />
    //       <img src={Company} alt="company name" style={{ maxHeight: "30px" }} />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
    //         {serviceProvider === "true" ? (
    //           <Nav.Link as={NavLink} className="header__links" href="/feed">
    //             Feed
    //           </Nav.Link>
    //         ) : (
    //           <Nav.Link as={NavLink} className="header__links" href="/services">
    //             Services
    //           </Nav.Link>
    //         )}
    //         {user && serviceProvider === "false" ? (
    //           <Nav.Link as={NavLink} className="header__links" href="/bookings">
    //             My Bookings
    //           </Nav.Link>
    //         ) : (
    //           <Nav.Link></Nav.Link>
    //         )}
    //         <Nav.Link as={NavLink} className="header__links" href="/support">
    //           Support
    //         </Nav.Link>
    //       </Nav>
    //       {user ? (
    //         <Nav>
    //           <Nav.Link>Welcome, {user}</Nav.Link>
    //           <Nav.Link eventKey={2} href="/login" onClick={handleLogout}>
    //             Log Out
    //           </Nav.Link>
    //         </Nav>
    //       ) : (
    //         <Nav>
    //           <Nav.Link href="/signUp">Sign Up</Nav.Link>
    //           <Nav.Link eventKey={2} href="/login">
    //             Log In
    //           </Nav.Link>
    //         </Nav>
    //       )}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
      <div className="header">
        <div className="header__logo-container">
          <img className="header__logo" src={Logo} alt="logo" />
          <img src={Company} className="header__logo-name" alt="company name" />
        </div>
        <div className="header__links-container">
          {/* Service provider profile */}
          {serviceProvider === "true" ? (
            <a as={NavLink} className="header__links" href="/feed">
              Feed
            </a>
          ) : (
            <a as={NavLink} className="header__links" href="/services">
              Services
            </a>
          )}
          {/* if logged in and not a service provider */}
          {user && serviceProvider === "false" ? (
            <a as={NavLink} className="header__links" href="/bookings">
              My Bookings
            </a>
          ) : (
            <a></a>
          )}
          <a as={NavLink} className="header__links" href="/support">
            Support
          </a>
        </div>
        <div className="header__login-container">
          <div>
            {/* if logged in */}
            {user ? (
              <div>
                <a className="header__links">Welcome, {user}</a>
                <a
                  className="header__links"
                  eventKey={2}
                  href="/login"
                  onClick={handleLogout}
                >
                  Log Out
                </a>
              </div>
            ) : (
              <div>
                <a href="/signUp" className="header__links">
                  Sign Up
                </a>
                <a eventKey={2} href="/login" className="header__links">
                  Log In
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
