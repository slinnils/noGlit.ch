import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${classes.active} font-bold` : "text-lab-text-muted";

  return (
    <nav className="ml-auto mr-20">
      <ul className={`flex gap-10 text-xl ${classes.list}`}>
        <li className="ml-10">
          <NavLink className={getNavLinkClass} to={""} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getNavLinkClass} to={"laboratory"}>Laboratory</NavLink>
        </li>
        <li>
          <NavLink className={getNavLinkClass} to={"blog"}>Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}
