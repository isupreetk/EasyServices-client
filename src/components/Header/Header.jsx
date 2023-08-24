import "./Header.scss"
import { NavLink } from "react-router-dom";
import SortIcon from "../../assets/Icons/sort-24px.svg";

function Header () {
    return(
        <header className="header">
            <div className="header__logo-div">
                <h1 className="header__logo">
                    EasyServices
                </h1>
            </div>
            <div className="header__nav">
                <ul className="header__nav-unordered-list"> 
                    <li className="header__nav-list-items">
                        <NavLink to = "/services" className="header__nav-list-items-link">
                        <div className="header__nav-list-items-div">
                            <p className="header__nav-list-items-content">Services</p>
                            <img src={SortIcon} alt="sort icon" />
                        </div>
                        </NavLink>
                    </li>
                    <li className="header__nav-list-items">
                        <NavLink to = "/aboutUs" className="header__nav-list-items-link">
                        <div className="header__nav-list-items-div">
                            <p className="header__nav-list-items-content">About Us</p>
                            <img src={SortIcon} alt="sort icon" />
                        </div>
                        </NavLink>
                    </li>
                    <li className="header__nav-list-items">
                        <NavLink to = "/contactUs" className="header__nav-list-items-link">
                        <div className="header__nav-list-items-div">
                            <p className="header__nav-list-items-content">Contact Us</p>
                            <img src={SortIcon} alt="sort icon" />
                        </div>
                        </NavLink>
                    </li>
                    <li className="header__nav-list-items">
                        <NavLink to = "/signUp" className="header__nav-list-items-link">
                        <div className="header__nav-list-items-div">
                            <p className="header__nav-list-items-content">Sign In</p>
                            <img src={SortIcon} alt="sort icon" />
                        </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;