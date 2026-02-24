import { useContext } from "react";

import { SkillContext } from "../../store/game-skill-context.jsx";

export default function Skills({ skill }) {
  const skillCtx = useContext(SkillContext);

  let skillLabel = `${skill.slice(0, 1).toUpperCase()}${skill.slice(
    1,
    skill.length
  )}:`;

  
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-blue-300">{skillLabel}</h2>

      <div className="flex text-4xl text-blue-300">
        <button
          onClick={() => skillCtx.dec(skill)}
          className="cursor-pointer hover:text-blue-950"
        >
          -
        </button>
        <p className="mx-7">{skillCtx.stats[skill]}</p>
        <button onClick={() => skillCtx.inc(skill)} className="cursor-pointer">
          +
        </button>
      </div>
    </div>
  );
}
