import { NavLink } from "react-router-dom";
import logo from "../assets/noGlitch_logo.png";

export default function Header() {
  return (
    <div className="place-self-start">
      <NavLink
        to={""}
        className="flex gap-4 items-center ml-5 mt-2 text-4xl text-lab-text-bright"
      >
        <img className="h-20 w-20" src={logo} alt="" />
        <div className="wrapper">
          <div className="stack">
            <span>noGlit.ch</span>
            <span>noGlit.ch</span>
            <span>noGlit.ch</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
