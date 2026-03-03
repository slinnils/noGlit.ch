import { NavLink } from "react-router-dom";
import { fetchExperiments } from "../../sanity/queries";
import { useEffect, useState } from "react";
import classes from "./Lab.module.css";

export default function ExperimentList({ onNavigate }) {
  const [experiments, setExperiments] = useState([]);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${classes.active} font-bold` : `${classes.navlink}`;

  useEffect(() => {
    fetchExperiments().then(setExperiments);
  }, []);

  return (
    <div className="flex">
      <ul className="text-[clamp(0.75rem,1.5vw,1.25rem)] font-semibold text-[#D1F8EF] flex flex-col items-center w-full">
        {experiments.map((exp) => (
          <li key={exp.slug} className="w-full flex justify-center mt-4">
            <NavLink
              onClick={onNavigate}
              className={getNavLinkClass}
              to={`/laboratory/${exp.slug}`}
            >
              {exp.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        onClick={onNavigate}
        className="empty-button h-10 w-10 flex items-center justify-center md:hidden"
      >
        ✕
      </button>
    </div>
  );
}
