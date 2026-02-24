import { NavLink } from "react-router-dom";
import { fetchExperiments } from "../../../sanity/queries";
import { useEffect, useState } from "react";
import classes from '../lab/Lab.module.css'

export default function ExperimentList() {
  const [experiments, setExperiments] = useState([]);

  const getNavLinkClass = ({ isActive }) =>
      isActive ? `${classes.active} font-bold` : `${classes.navlink}`;

  useEffect(() => {
    fetchExperiments().then(setExperiments);
  }, []);

  return (
    <ul className="text-xl font-semibold text-[#D1F8EF] flex flex-col items-center w-full">
      {experiments.map((exp) => (
        <li key={exp.slug} className="w-full flex justify-center mt-4">
          <NavLink className={getNavLinkClass} to={`/laboratory/${exp.slug}`}>
            {exp.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}