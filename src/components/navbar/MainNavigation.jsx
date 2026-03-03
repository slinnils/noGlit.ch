import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useState } from "react";

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function sideBar() {
    setIsOpen((prev) => !prev);
  }

  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${classes.active} font-bold` : "text-lab-text-muted";

  return (
    <nav className="ml-auto mr-5 md:mr-20 relative">
      <div onClick={sideBar} className="md:hidden">
        <div className="text-lab-accent text-3xl cursor-pointer">
          {isOpen ? "X" : "☰"}
        </div>
      </div>
      <ul
        className={`${classes.mobileMenu} ${isOpen ? classes.menuOpen : ""} md:flex md:relative md:flex-row md:p-0 md:border-0 md:bg-transparent gap-10 text-xl ${classes.list}`}
      >
        <li className="md:ml-10">
          <NavLink
            onClick={() => setIsOpen(false)}
            className={getNavLinkClass}
            to={""}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={getNavLinkClass}
            to={"laboratory"}
          >
            Laboratory
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={getNavLinkClass}
            to={"blog"}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
