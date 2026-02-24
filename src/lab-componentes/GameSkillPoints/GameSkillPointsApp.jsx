import SkillPointsSelector from "./SkillPointsSelector";
import SkillContextProvider from "../../lab-componentes/GameSkillPoints/store/game-skill-context.jsx";

export default function GameSkillPointsApp() {

  return (
    <div>
      <h1 className="text-2xl text-amber-700">
        Choose the Skills for your Charakter:
      </h1>
      <SkillContextProvider>
        <SkillPointsSelector />
      </SkillContextProvider>
    </div>
  );
}
