// import "./Header.scss"
// import { NavLink } from "react-router-dom";
// import SortIcon from "../../assets/Icons/sort-24px.svg";

// function Header () {
//     return(
//         <header className="header">
//             <div className="header__logo-div">
//                 <h1 className="header__logo">
//                     EasyServices
//                 </h1>
//             </div>
//             <div className="header__nav">
//                 <ul className="header__nav-unordered-list">
//                     <li className="header__nav-list-items">
//                         <NavLink to = "/services" className="header__nav-list-items-link">
//                         <div className="header__nav-list-items-div">
//                             <p className="header__nav-list-items-content">Services</p>
//                             <img src={SortIcon} alt="sort icon" />
//                         </div>
//                         </NavLink>
//                     </li>
//                     <li className="header__nav-list-items">
//                         <NavLink to = "/aboutUs" className="header__nav-list-items-link">
//                         <div className="header__nav-list-items-div">
//                             <p className="header__nav-list-items-content">About Us</p>
//                             <img src={SortIcon} alt="sort icon" />
//                         </div>
//                         </NavLink>
//                     </li>
//                     <li className="header__nav-list-items">
//                         <NavLink to = "/contactUs" className="header__nav-list-items-link">
//                         <div className="header__nav-list-items-div">
//                             <p className="header__nav-list-items-content">Contact Us</p>
//                             <img src={SortIcon} alt="sort icon" />
//                         </div>
//                         </NavLink>
//                     </li>
//                     <li className="header__nav-list-items">
//                         <NavLink to = "/signUp" className="header__nav-list-items-link">
//                         <div className="header__nav-list-items-div">
//                             <p className="header__nav-list-items-content">Sign In</p>
//                             <img src={SortIcon} alt="sort icon" />
//                         </div>
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </header>
//     )
// }

// export default Header;

/* next */
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function Header() {
//   return (
//     <>
//       {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
//         <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
//           <Container fluid>
//             <Navbar.Brand href="#">Logo</Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>
//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default Header;

/* next */

import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/logo.png";
import Company from "../../assets/images/company.png";
import "./Header.scss";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className=" navbar navbar-dark bg-dark">
      <Container fluid className="header__links">
        <Navbar.Brand href="/services">
          <img
            className="logo"
            src={Logo}
            alt="logo"
            style={{ maxHeight: "35px" }}
          />
          <img
            // className="company"
            src={Company}
            alt="company name"
            style={{ maxHeight: "30px" }}
          />
          {/* EasyServices */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            // navbarScroll
          >
            <Nav.Link as={NavLink} className="header__links" href="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} href="/aboutUs">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} href="/contactUs">
              Contact Us
            </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>

          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
