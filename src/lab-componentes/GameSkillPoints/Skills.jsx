import { useContext } from "react";

import { SkillContext } from "./store/game-skill-context";

export default function Skills({ skill }) {
  const skillCtx = useContext(SkillContext);

  let skillLabel = `${skill.slice(0, 1).toUpperCase()}${skill.slice(
    1,
    skill.length,
  )}:`;

  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-lab-text-bright">{skillLabel}</h2>

      <div className="flex text-4xl text-lab-text-main">
        <button onClick={() => skillCtx.dec(skill)}>-</button>
        <p className="mx-7">{skillCtx.stats[skill]}</p>
        <button onClick={() => skillCtx.inc(skill)}>+</button>
      </div>
    </div>
  );
}
