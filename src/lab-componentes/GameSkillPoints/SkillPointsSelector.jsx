import { useContext } from "react";
import Skills from "./Skills.jsx";

import { SkillContext } from "../../store/game-skill-context.jsx";

export default function SkillPointsSelector() {
    const { pointsToSpend } = useContext(SkillContext);
  return (
    <section className="flex flex-col justify-center items-center mt-5">
      <div className=" bg-linear-to-bl from-[#0d2238] to-[#123458] rounded-2xl py-5 px-25">
        <h2 className="text-blue-500 text-3xl">
          you can spend {pointsToSpend} Skillpoints:
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

