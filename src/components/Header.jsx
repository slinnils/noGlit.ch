import { NavLink } from "react-router-dom";
import logo from "../assets/noGlitch_logo.png";

export default function Header() {
  return (
    <div className="place-self-start">
      <NavLink
        to={""}
        className="flex gap-4 items-center ml-5 mt-2 text-lab-text-bright"
      >
        <img className="h-[clamp(3rem,10vw,5rem)] w-[clamp(3rem,10vw,5rem)]" src={logo} alt="" />
        <div className="wrapper">
          <div className="stack">
            <span className="text-[clamp(1.5rem,5vw,3rem)]">noGlit.ch</span>
            <span className="text-[clamp(1.5rem,5vw,3rem)]">noGlit.ch</span>
            <span className="text-[clamp(1.5rem,5vw,3rem)]">noGlit.ch</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
