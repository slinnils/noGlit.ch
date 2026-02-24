import { useContext } from "react";
import Skills from "./Skills.jsx";

import { SkillContext } from "./store/game-skill-context.jsx";

export default function SkillPointsSelector() {
    const { pointsToSpend } = useContext(SkillContext);
  return (
    <section className="flex flex-col justify-center items-center mt-5">
      <div className="card">
        <h2 className="text-lab-text-bright text-3xl">
          you can spend <span className="text-lab-accent">{pointsToSpend}</span> Skillpoints:
        </h2>
        <div className="flex gap-20 my-5">
          <Skills skill="strength" />
          <Skills skill="agility" />
          <Skills skill="intelligence" />
        </div>
      </div>
    </section>
  );
}

