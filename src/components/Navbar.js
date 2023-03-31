import "./reset.css";
import "./Navbar.css";
import logo from "../images/logo.svg";
import profile from "../images/user-profile.png";
import heart from "../images/like.png";
import cart from "../images/shopping-cart.png";
// import search from '../images/search.png'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
// import Dropdown from "./Dropdown"
import dropdownItem from "./dropdownItem";
import "./Dropdown.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="head">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="search-bar">
          {/* <img src={search} alt='search' className='search-icon'/> */}
          <input placeholder="წამლის ძიება" className="search"></input>
        </div>
        <div className="head-icons">
          <Link to="/profile">
            <img src={profile} alt="profile" className="profile" />
          </Link>
          <Link to="/">
            <img src={heart} alt="heart" className="heart" />
          </Link>
          <Link to="/Cart">
            <img src={cart} alt="cart" className="cart" />
          </Link>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <CustomLink onClick={() => setOpen(!open)}>კატალოგი</CustomLink>
          <CustomLink to="/Pharmacy">აფთიაქები</CustomLink>
          <CustomLink to="/">კლინიკები</CustomLink>
          <CustomLink to="/">ჩვენს შესახებ</CustomLink>
        </ul>
      </nav>
      {/* <Dropdown /> */}
      {open && (
        <div className="dropdown" onClick={() => setOpen(false)}>
          <ul>
            {dropdownItem.map((item) => (
              <CustomLink key={item.id} to={item.path} className={item.cName}>
                {item.title}
              </CustomLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
